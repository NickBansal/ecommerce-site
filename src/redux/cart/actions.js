import cartTypes from './types';

export const setCurrentCart = () => ({
	type: cartTypes.TOGGLE_CART_DROPDOWN
});

export const addItemsToCart = cartItem => ({
	type: cartTypes.ADD_TO_CART,
	payload: cartItem
});

export const totalItemsInCart = () => ({
	type: cartTypes.TOTAL_ITEMS_IN_CART
});
