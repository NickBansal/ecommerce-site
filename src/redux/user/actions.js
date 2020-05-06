import userTypes from './types';

export const googleSignInStart = () => ({
	type: userTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = emailAndPassword => ({
	type: userTypes.EMAIL_SIGNIN_START,
	payload: emailAndPassword
});

export const signInSuccess = user => ({
	type: userTypes.SIGNIN_SUCCESS,
	payload: user
});

export const signInFailure = error => ({
	type: userTypes.SIGNIN_FAILURE,
	payload: error
});

export const signOutStart = () => ({
	type: userTypes.SIGNOUT_START
});

export const signOutSuccess = () => ({
	type: userTypes.SIGNOUT_SUCCESS
});

export const signOutFailure = error => ({
	type: userTypes.SIGNOUT_FAILURE,
	payload: error
});
