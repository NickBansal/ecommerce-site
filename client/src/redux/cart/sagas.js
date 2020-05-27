import { all, call, put, takeLatest } from 'redux-saga/effects';

import userTypes from '../user/types';
import { clearCart } from './actions';

export function* clearCartOnSignOut() {
	yield put(clearCart());
}

export function* onSignOutSuccess() {
	yield takeLatest(userTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
	yield all([call(onSignOutSuccess)]);
}
