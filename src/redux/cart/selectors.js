import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartHidden = createSelector(
	[selectCart],
	cart => cart.hidden
);

export const selectCartTotalItems = createSelector(
	[selectCart],
	cart => cart.totalItems
);

export const selectCartTotalPrice = createSelector(
	[selectCart],
	cart => cart.totalPrice
);
