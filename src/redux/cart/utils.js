export const calculateQuanity = (payload, cartItems) => {
	const newPayload = { ...payload };
	const newItems = cartItems.slice();

	if (
		!cartItems.find(
			item => item.id === newPayload.id && item.name === newPayload.name
		)
	) {
		return [...cartItems, { ...newPayload, quantity: 1 }];
	}

	const arrayIndex = newItems.findIndex(
		item => item.id === newPayload.id && item.name === newPayload.name
	);
	newItems[arrayIndex].quantity++;

	return newItems;
};

export const removeItems = (payload, cartItems) => {
	if (payload.quantity === 1) {
		return cartItems.filter(
			item => item.id !== payload.id && item.name !== payload.name
		);
	}

	return cartItems.map(item => {
		if (item.id === payload.id && item.name === payload.name) {
			return {
				...item,
				quantity: item.quantity - 1
			};
		}
		return item;
	});
};
