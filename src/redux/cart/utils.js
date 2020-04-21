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

export const decreaseItems = (payload, cartItems) => {
	const newItems = cartItems.slice();

	if (payload.quantity <= 1) {
		return newItems;
	}

	const arrayIndex = newItems.findIndex(
		item => item.id === payload.id && item.name === payload.name
	);
	newItems[arrayIndex].quantity--;

	return newItems;
};

export const increaseItems = (payload, cartItems) => {
	const newItems = cartItems.slice();

	const arrayIndex = newItems.findIndex(
		item => item.id === payload.id && item.name === payload.name
	);
	newItems[arrayIndex].quantity++;

	return newItems;
};

export const increasePriceAndAmount = ({ totalItems, totalPrice }, price) => {
	return {
		totalItems: totalItems + 1,
		totalPrice: totalPrice + price
	};
};

export const decreasePriceAndAmount = (
	{ totalItems, totalPrice },
	{ quantity, price }
) => {
	if (quantity > 1) {
		return {
			totalItems: totalItems - 1,
			totalPrice: totalPrice - price
		};
	}

	return {
		totalItems,
		totalPrice
	};
};
