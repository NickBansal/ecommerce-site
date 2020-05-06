import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './directory/sagas';
import { userSagas } from './user/sagas';

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas)]);
}
