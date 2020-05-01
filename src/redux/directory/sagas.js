import { takeEvery } from 'redux-saga/effects';

import directoryTypes from './types';

export function* fetchCollectionsAsync() {
	console.log('I am fired');
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		directoryTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}
