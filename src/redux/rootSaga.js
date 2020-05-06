import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './directory/sagas';

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart)]);
}
