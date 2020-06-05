import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Checkout from '.';

const GET_CART_ITEMS = gql`
	{
		cartItems @client
	}
`;

const ADD_ITEM_TO_CART = gql`
	mutation AddItemToCart($item: Item!) {
		addItemToCart(item: $item) @client
	}
`;

const CheckoutContainer = () => (
	<Mutation mutation={ADD_ITEM_TO_CART}>
		{addItemToCart => (
			<Query query={GET_CART_ITEMS}>
				{({ data: { cartItems } }) => (
					<Checkout
						cartItems={cartItems}
						addItemToCart={item =>
							addItemToCart({ variables: { item } })
						}
					/>
				)}
			</Query>
		)}
	</Mutation>
);

export default CheckoutContainer;
