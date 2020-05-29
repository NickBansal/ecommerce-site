import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import CustomButton from '../../CustomButton';
import CartItems from '../Items';

import { CartContext } from '../../../context/cart';

const Container = styled.div`
	position: fixed;
	width: 270px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 84px;
	right: 27px;
	z-index: 5;

	.cart-items {
		height: 230px;
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}

	button {
		margin: 20px auto;
	}
`;

const NoItems = styled.p`
	text-align: center;
`;

const CartDropDown = () => {
	const history = useHistory();

	const { cartItems, toggleHidden } = useContext(CartContext);

	return (
		<Container>
			{!cartItems.length ? (
				<NoItems>There are no items in your cart</NoItems>
			) : (
				<div className="cart-dropdown">
					<div className="cart-items">
						{cartItems.map(cartItem => (
							<CartItems
								key={`${cartItem.id}${cartItem.name}`}
								item={cartItem}
							/>
						))}
					</div>
					<CustomButton
						onClick={() => {
							history.push('/checkout');
							toggleHidden();
						}}
					>
						GO TO CHECKOUT
					</CustomButton>
				</div>
			)}
		</Container>
	);
};

export default CartDropDown;
