import directoryTypes from './types';
import { firestore } from '../../firebase/utils';
import convertCollectionsToMap from '../../firebase/convertCollectionsToMap';

export const fetchCollectionsSuccess = data => ({
	type: directoryTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: data
});

export const fetchCollectionsFailure = errorMessage => ({
	type: directoryTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection('collections');

		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionsMap));
			})
			.catch(error => {
				dispatch(fetchCollectionsFailure(error));
			});
	};
};
