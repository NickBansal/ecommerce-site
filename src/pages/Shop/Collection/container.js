import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';

import Collection from '.';
import Loading from '../../../components/Loading';
import Error from '../../../components/Form/Error';

const GET_COLLECTIONS_BY_TITLE = gql`
	query getCollectionsByTitle($title: String!) {
		getCollectionsByTitle(title: $title) {
			id
			title
			items {
				id
				name
				price
				imageUrl
			}
		}
	}
`;

const CollectionsContainer = () => {
	const { collectionId } = useParams();

	return (
		<Query
			query={GET_COLLECTIONS_BY_TITLE}
			variables={{ title: collectionId }}
		>
			{({ loading, error, data }) => {
				if (loading) {
					return <Loading />;
				}

				if (error) {
					return (
						<Error>
							There was a problem with receiving the data - please
							try again
						</Error>
					);
				}

				const { getCollectionsByTitle } = data;

				return <Collection data={getCollectionsByTitle} />;
			}}
		</Query>
	);
};

export default CollectionsContainer;
