export default (payload, cartItems) => {
	const newPayload = { ...payload };
	const newItems = cartItems.slice();

	if (
		!cartItems.find(
			item => item.id === newPayload.id && item.name === newPayload.name
		)
	) {
		newPayload.quantity = 1;
		return [...cartItems, newPayload];
	}

	const arrayIndex = newItems.findIndex(
		item => item.id === newPayload.id && item.name === newPayload.name
	);
	newItems[arrayIndex].quantity++;

	return newItems;
};
