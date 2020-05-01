import OPTIONS from '../../constants/options';

import directoryTypes from './types';

const INITIAL_STATE = {
	data: null,
	sections: OPTIONS,
	errorMessage: undefined
};

const directoryReducer = (state = INITIAL_STATE, actions) => {
	switch (actions.type) {
		case directoryTypes.FETCH_COLLECTIONS_START:
			return {
				...state
			};
		case directoryTypes.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				data: actions.payload
			};
		case directoryTypes.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				errorMessage: actions.payload
			};
		default:
			return state;
	}
};

export default directoryReducer;
