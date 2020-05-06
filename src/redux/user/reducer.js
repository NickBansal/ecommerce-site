import userTypes from './types';

const INITIAL_STATE = {
	currentUser: null,
	errorMessage: null,
	signUpError: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userTypes.SIGNUP_SUCCESS:
		case userTypes.SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				signUpError: null,
				errorMessage: null
			};
		case userTypes.SIGNOUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				errorMessage: null,
				signUpError: null
			};
		case userTypes.SIGNIN_FAILURE:
		case userTypes.SIGNOUT_FAILURE:
			return {
				...state,
				errorMessage: action.payload,
				signUpError: null
			};
		case userTypes.SIGNUP_FAILURE:
			return {
				...state,
				errorMessage: null,
				signUpError: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
