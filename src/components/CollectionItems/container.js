import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItems from '.';

const ADD_ITEM_TO_CART = gql`
	mutation AddItemToCart($item: Item!) {
		addItemToCart(item: $item) @client
	}
`;

const CollectionItemsContainer = props => (
	<Mutation mutation={ADD_ITEM_TO_CART}>
		{addItemToCart => (
			<CollectionItems
				addItemToCart={item => addItemToCart({ variables: { item } })}
				{...props}
			/>
		)}
	</Mutation>
);

export default CollectionItemsContainer;
