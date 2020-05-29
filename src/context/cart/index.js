import React, { createContext, useState, useEffect } from 'react';

import {
	addItemToCart,
	removeItemFromCart,
	filterItemFromCart,
	getCartItemsCount,
	getCartTotalPrice
} from './utils';

export const CartContext = createContext({
	hidden: true,
	toggleHidden: () => {},
	cartItems: [],
	addItem: () => {},
	removeItem: () => {},
	clearItemFromCart: () => {},
	emptyCart: () => {},
	cartItemsCount: 0,
	total: 0
});

const CartProvider = ({ children }) => {
	const [hidden, setHidden] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [cartItemsCount, setCartItemsCount] = useState(0);
	const [total, setTotal] = useState(0);

	const addItem = item => setCartItems(addItemToCart(cartItems, item));
	const removeItem = item =>
		setCartItems(removeItemFromCart(cartItems, item));
	const toggleHidden = () => setHidden(!hidden);
	const clearItemFromCart = item =>
		setCartItems(filterItemFromCart(cartItems, item));
	const emptyCart = () => setCartItems([]);

	useEffect(() => {
		setCartItemsCount(getCartItemsCount(cartItems));
		setTotal(getCartTotalPrice(cartItems));
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				hidden,
				toggleHidden,
				cartItems,
				addItem,
				removeItem,
				clearItemFromCart,
				cartItemsCount,
				emptyCart,
				total
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
