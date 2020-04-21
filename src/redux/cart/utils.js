export const calculateQuanity = (payload, cartItems) => {
	const newItems = cartItems.slice();

	if (
		!cartItems.find(
			item => item.id === payload.id && item.name === payload.name
		)
	) {
		return [...cartItems, { ...payload, quantity: 1 }];
	}

	const arrayIndex = newItems.findIndex(
		item => item.id === payload.id && item.name === payload.name
	);
	newItems[arrayIndex].quantity++;

	return newItems;
};

export const removeItems = (payload, cartItems) => {
	const newItems = cartItems.slice();

	if (payload.quantity === 1) {
		return newItems.filter(item => item.name !== payload.name);
	}

	const arrayIndex = newItems.findIndex(
		item => item.id === payload.id && item.name === payload.name
	);
	newItems[arrayIndex].quantity--;

	return newItems;
};
