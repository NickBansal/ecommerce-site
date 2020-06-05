import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Checkout from '.';

const GET_CART_ITEMS = gql`
	{
		cartItems @client
	}
`;

const CheckoutContainer = () => (
	<Query query={GET_CART_ITEMS}>
		{({ data: { cartItems } }) => <Checkout cartItems={cartItems} />}
	</Query>
);

export default CheckoutContainer;
