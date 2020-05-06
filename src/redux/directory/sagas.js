import { takeLatest, call, put } from 'redux-saga/effects';
import { firestore } from '../../firebase/utils';
import convertCollectionsToMap from '../../firebase/convertCollectionsToMap';

import directoryTypes from './types';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './actions';

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsToMap, snapshot);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		directoryTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}
