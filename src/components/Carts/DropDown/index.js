import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import CustomButton from '../../CustomButton';
import CartItems from '../Items';

import { toggleCurrentCart } from '../../../redux/cart/actions';

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

const CartDropDown = ({ history }) => {
	const cartItems = useSelector(state => state.cart.cartItems);

	const dispatch = useDispatch();

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
							dispatch(toggleCurrentCart());
						}}
					>
						GO TO CHECKOUT
					</CustomButton>
				</div>
			)}
		</Container>
	);
};

export default withRouter(CartDropDown);
