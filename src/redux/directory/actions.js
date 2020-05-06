import directoryTypes from './types';

export const fetchCollectionsStart = () => ({
	type: directoryTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = data => ({
	type: directoryTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: data
});

export const fetchCollectionsFailure = errorMessage => ({
	type: directoryTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});
