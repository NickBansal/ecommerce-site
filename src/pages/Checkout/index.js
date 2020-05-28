import React, { useContext } from 'react';
import styled from 'styled-components';

import CheckoutItems from '../../components/CheckoutItems';
import StripeButton from '../../components/StripeButton';

import { CartContext } from '../../provider/cart/index';

const Container = styled.div`
	width: 55%;
	min-height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto;

	.total {
		margin-top: 10px;
		margin-left: auto;
		font-size: 36px;
	}

	button {
		margin-left: auto;
	}
`;

const Header = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;

const NoItems = styled.p`
	text-align: center;
	font-size: 18px;
`;

const CardDetails = styled.div`
	width: 100%;
	text-align: center;
	color: red;
	margin-top: 10px;
`;

const Checkout = () => {
	const { cartItems, total } = useContext(CartContext);

	return (
		<Container>
			<Header>
				<HeaderBlock>Product</HeaderBlock>
				<HeaderBlock>Description</HeaderBlock>
				<HeaderBlock>Quantity</HeaderBlock>
				<HeaderBlock>Price</HeaderBlock>
				<HeaderBlock>Remove</HeaderBlock>
			</Header>
			{!cartItems.length ? (
				<NoItems>There are no items here to buy</NoItems>
			) : (
				cartItems.map(cartItem => (
					<CheckoutItems
						key={`${cartItem.id} ${cartItem.name}`}
						cartItem={cartItem}
					/>
				))
			)}
			{Boolean(cartItems.length) && (
				<>
					<CardDetails>
						*Please use the following card details when paying
						<br />
						4242 4242 4242 4242 - 01/30 - 123
					</CardDetails>
					<div className="total">TOTAL: £{total}</div>
					<StripeButton className="stripe" price={total} />
				</>
			)}
		</Container>
	);
};

export default Checkout;
