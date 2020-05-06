import { takeLatest, put, all, call } from 'redux-saga/effects';

import userTypes from './types';
import {
	googleSignInSuccess,
	googleSignInFailure,
	signOutSuccess,
	signOutFailure
} from './actions';

import { auth, googleProvider } from '../../firebase/utils';
import createUserProfileDocument from '../../firebase/createUser';

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const snapshot = yield userRef.get();
		yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
	} catch (error) {
		yield put(googleSignInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(userTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
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

export function* userSagas() {
	yield all([call(onGoogleSignInStart), call(onSignOutStart)]);
}
