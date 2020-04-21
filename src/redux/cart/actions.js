import cartTypes from './types';

export const toggleCurrentCart = () => ({
	type: cartTypes.TOGGLE_CART_DROPDOWN
});

export const addItemsToCart = cartItems => ({
	type: cartTypes.ADD_TO_CART,
	payload: cartItems
});

export const removeItemsFromCart = cartItems => ({
	type: cartTypes.REMOVE_FROM_CART,
	payload: cartItems
});

export const decreaseItems = cartItems => ({
	type: cartTypes.DECREASE_ITEMS,
	payload: cartItems
});

export const increaseItems = cartItems => ({
	type: cartTypes.INCREASE_ITEMS,
	payload: cartItems
});
