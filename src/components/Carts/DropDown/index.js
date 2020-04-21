import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../CustomButton';
import Items from '../Items';

import { selectCartItems } from '../../../redux/cart/selectors';
import { setCurrentCart } from '../../../redux/cart/actions';

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

const CartDropDown = ({ cartItems, toggleCart }) => (
	<Container>
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map(cartItem => (
					<Items
						key={`${cartItem.id}${cartItem.name}`}
						item={cartItem}
					/>
				))}
			</div>
			<Link to="/checkout">
				<CustomButton onClick={toggleCart}>GO TO CHECKOUT</CustomButton>
			</Link>
		</div>
	</Container>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
	toggleCart: () => dispatch(setCurrentCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
