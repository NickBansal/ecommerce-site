import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CustomButton from '../../CustomButton';
import Items from '../Items';

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
		height: 230px;
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}

	button {
		margin: 20px auto;
	}
`;

const CartDropDown = ({ cartItems }) => (
	<Container>
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map(cartItem => (
					<Items key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	</Container>
);

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropDown);
