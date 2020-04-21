import cartTypes from './types';
import {
	calculateQuanity,
	removeItems,
	decreaseItems,
	increaseItems,
	increasePriceAndAmount,
	decreasePriceAndAmount
} from './utils';

const INITIAL_STATE = {
	hidden: false,
	cartItems: [],
	totalItems: 0,
	totalPrice: 0
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
				...increasePriceAndAmount(state, action.payload.price),
				cartItems: calculateQuanity(action.payload, state.cartItems)
			};
		case cartTypes.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: removeItems(action.payload, state.cartItems),
				totalItems: state.totalItems - action.payload.quantity,
				totalPrice:
					state.totalPrice -
					action.payload.price * action.payload.quantity
			};

		case cartTypes.DECREASE_ITEMS:
			return {
				...state,
				...decreasePriceAndAmount(state, action.payload),
				cartItems: decreaseItems(action.payload, state.cartItems)
			};
		case cartTypes.INCREASE_ITEMS:
			return {
				...state,
				...increasePriceAndAmount(state, action.payload.price),
				cartItems: increaseItems(action.payload, state.cartItems)
			};
		default:
			return state;
	}
};

export default cartReducer;
