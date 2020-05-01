import userTypes from './types';

export default user => ({
	type: userTypes.SET_CURRENT_USER,
	payload: user
});
