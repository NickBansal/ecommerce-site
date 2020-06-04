import React from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CartIcon from '.';

const TOGGLE_CART_HIDDEN = gql`
	mutation ToggleCartHidden {
		toggleCartHidden @client
	}
`;

const GET_CART_ITEM_COUNT = gql`
	{
		itemCount @client
	}
`;

const CartIconContainer = () => (
	<Mutation mutation={TOGGLE_CART_HIDDEN}>
		{toggleCartHidden => (
			<Query query={GET_CART_ITEM_COUNT}>
				{({ data: { itemCount } }) => (
					<CartIcon
						toggleCartHidden={toggleCartHidden}
						itemCount={itemCount}
					/>
				)}
			</Query>
		)}
	</Mutation>
);

export default CartIconContainer;
