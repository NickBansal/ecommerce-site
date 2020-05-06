import userTypes from './types';

const INITIAL_STATE = {
	currentUser: null,
	errorMessage: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				errorMessage: null
			};
		case userTypes.SIGNOUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				errorMessage: null
			};
		case userTypes.SIGNIN_FAILURE:
		case userTypes.SIGNOUT_FAILURE:
			return {
				...state,
				errorMessage: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
