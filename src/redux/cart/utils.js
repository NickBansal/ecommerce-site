export const calculateQuanity = (payload, cartItems) => {
	const newItems = cartItems.slice();

	if (
		!cartItems.some(
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

export const removeItems = (payload, cartItems) =>
	cartItems.filter(item => item.name !== payload.name);
