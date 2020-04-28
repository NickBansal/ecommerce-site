import OPTIONS from '../../constants/options';

import directoryTypes from './types';

const INITIAL_STATE = {
	data: null,
	sections: OPTIONS
};

const directoryReducer = (state = INITIAL_STATE, actions) => {
	switch (actions.type) {
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
