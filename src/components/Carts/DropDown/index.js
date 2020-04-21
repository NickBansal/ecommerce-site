import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../CustomButton';
import Items from '../Items';

import { selectCartItems } from '../../../redux/cart/selectors';
import { toggleCurrentCart } from '../../../redux/cart/actions';

const Container = styled.div`
	position: absolute;
	width: 270px;
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

const NoItems = styled.p`
	text-align: center;
`;

const CartDropDown = ({ cartItems, history, dispatch }) => (
	<Container>
		{!cartItems.length ? (
			<NoItems>There are no items in your cart</NoItems>
		) : (
			<div className="cart-dropdown">
				<div className="cart-items">
					{cartItems.map(cartItem => (
						<Items
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

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
