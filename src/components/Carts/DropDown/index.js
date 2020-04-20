import React from 'react';
import styled from 'styled-components';

import CustomButton from '../../CustomButton';

const Container = styled.div`
	position: absolute;
	width: 250px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 84px;
	right: 47px;
	z-index: 5;

	.cart-items {
		height: 240px;
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}

	button {
		margin-top: auto;
	}
`;

const CartDropDown = () => (
	<Container>
		<div className="cart-items" />
		<CustomButton className="button"> GO TO CHECKOUT </CustomButton>
	</Container>
);

export default CartDropDown;
