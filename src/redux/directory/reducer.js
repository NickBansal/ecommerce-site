import OPTIONS from '../../constants/options';

import directoryTypes from './types';

const INITIAL_STATE = {
	data: null,
	sections: OPTIONS,
	isFetching: false,
	errorMessage: undefined
};

const directoryReducer = (state = INITIAL_STATE, actions) => {
	switch (actions.type) {
		case directoryTypes.FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true
			};
		case directoryTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				data: actions.payload,
				isFetching: false
			};
		case directoryTypes.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				errorMessage: actions.payload,
				isFetching: false
			};
		case directoryTypes.GET_CURRENT_DATA:
			return {
				...state,
				data: actions.payload
			};
		default:
			return state;
	}
};

export default directoryReducer;
