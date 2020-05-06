import { takeLatest, put, all, call } from 'redux-saga/effects';

import userTypes from './types';
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure
} from './actions';

import { auth, googleProvider } from '../../firebase/utils';
import createUserProfileDocument from '../../firebase/createUser';
import getCurrentUser from '../../firebase/getCurrentUser';

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth);
		const snapshot = yield userRef.get();
		yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(userTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure(error));
	}
}

export function* onSignOutStart() {
	yield takeLatest(userTypes.SIGNOUT_START, signOut);
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) {
			return;
		}
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onSignOutStart),
		call(isUserAuthenticated)
	]);
}