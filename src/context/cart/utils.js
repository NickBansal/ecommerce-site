export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map(cartItem =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
	cartItems.map(cartItem =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);

export const filterItemFromCart = (cartItems, item) =>
	cartItems.filter(cartItem => cartItem.id !== item.id);

export const getCartItemsCount = cartItems =>
	cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.quantity,
		0
	);

export const getCartTotalPrice = cartItems =>
	cartItems.reduce(
		(accumalatedQuantity, cartItem) =>
			accumalatedQuantity + cartItem.price * cartItem.quantity,
		0
	);
