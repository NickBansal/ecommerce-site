import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	removeItemsFromCart,
	decreaseItems,
	increaseItems
} from '../../redux/cart/actions';

import CheckoutItems from '../../components/CheckoutItems';

import {
	selectCartItems,
	selectCartTotalPrice
} from '../../redux/cart/selectors';

const Container = styled.div`
	width: 55%;
	min-height: 80vh;
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

const NoItems = styled.p`
	text-align: center;
	font-size: 18px;
`;

const Checkout = ({ cartItems, total, removeItems, decrease, increase }) => (
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
		{!cartItems.length ? (
			<NoItems>There are no items here to buy</NoItems>
		) : (
			cartItems.map(cartItem => (
				<CheckoutItems
					key={`${cartItem.id} ${cartItem.name}`}
					cartItem={cartItem}
					removeItems={removeItems}
					decrease={decrease}
					increase={increase}
				/>
			))
		)}
		{Boolean(cartItems.length) && (
			<div className="total">TOTAL: £{total}</div>
		)}
	</Container>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotalPrice
});

const mapDispatchToProps = dispatch => ({
	removeItems: user => dispatch(removeItemsFromCart(user)),
	decrease: user => dispatch(decreaseItems(user)),
	increase: user => dispatch(increaseItems(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
