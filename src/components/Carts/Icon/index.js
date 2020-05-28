import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/cart.svg';

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

const CartIcon = ({ toggleHidden, hidden }) => {
	const totalItems = useSelector(state => state.cart.totalItems);

	return (
		<Container onClick={() => toggleHidden(!hidden)}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count"> {totalItems} </span>
		</Container>
	);
};

export default CartIcon;
