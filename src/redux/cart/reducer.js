import cartTypes from './types';
import { calculateQuanity, removeItems } from './utils';

const INITIAL_STATE = {
	hidden: false,
	cartItems: [],
	totalItems: 0
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case cartTypes.TOGGLE_CART_DROPDOWN:
			return {
				...state,
				hidden: !state.hidden
			};
		case cartTypes.ADD_TO_CART:
			return {
				...state,
				cartItems: calculateQuanity(action.payload, state.cartItems),
				totalItems: state.totalItems + 1
			};
		case cartTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: removeItems(action.payload, state.cartItems),
				totalItems: state.totalItems - 1
			};
		default:
			return state;
	}
};

export default cartReducer;
