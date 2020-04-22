import SHOP_DATA from '../../constants/shopData';
import OPTIONS from '../../constants/options';

const INITIAL_STATE = {
	data: SHOP_DATA,
	sections: OPTIONS
};

const directoryReducer = (state = INITIAL_STATE, actions) => {
	switch (actions.type) {
		default:
			return state;
	}
};

export default directoryReducer;
