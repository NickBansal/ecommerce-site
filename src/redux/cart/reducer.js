import cartTypes from './types';
import calculateQuanity from './utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
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
				cartItems: calculateQuanity(action.payload, state.cartItems)
			};
		case cartTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: [
					...state.cartItems.filter(
						item => item.id !== action.payload
					)
				]
			};
		default:
			return state;
	}
};

export default cartReducer;
