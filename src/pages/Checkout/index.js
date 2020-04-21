import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItems';

import {
	selectCartItems,
	selectCartTotalItems
} from '../../redux/cart/selectors';

const Container = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	.total {
		margin-top: 30px;
		margin-left: auto;
		font-size: 36px;
	}
`;

const Header = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;

	.header-block {
		text-transform: capitalize;
		width: 23%;

		&:last-child {
			width: 8%;
		}
	}
`;

const Checkout = ({ cartItems, total }) => (
	<Container>
		<Header>
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</Header>
		{cartItems.map(cartItem => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}
		<div className="total">TOTAL: £{total}</div>
	</Container>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotalItems
});

export default connect(mapStateToProps)(Checkout);
