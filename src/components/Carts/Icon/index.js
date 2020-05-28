import React, { useContext } from 'react';
import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../../assets/cart.svg';

import { CartContext } from '../../../provider/cart/index';

const Container = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	.shopping-icon {
		width: 34px;
		height: 34px;
		margin-bottom: 10px;
	}

	.item-count {
		position: absolute;
		font-size: 14px;
		font-weight: bold;
		bottom: 14px;
	}
`;

const CartIcon = () => {
	const { toggleHidden, cartItemsCount } = useContext(CartContext);

	return (
		<Container onClick={toggleHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count"> {cartItemsCount} </span>
		</Container>
	);
};

export default CartIcon;
