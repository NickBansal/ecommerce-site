import directoryTypes from './types';

export const setCurrentData = data => ({
	type: directoryTypes.GET_CURRENT_DATA,
	payload: data
});

export const user = () => {};
