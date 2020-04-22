import SHOP_DATA from '../../constants/shopData';
import OPTIONS from '../../constants/options';

const INITIAL_STATE = {
	data: SHOP_DATA,
	sections: OPTIONS
};

const directoryReducer = () => INITIAL_STATE;

export default directoryReducer;
