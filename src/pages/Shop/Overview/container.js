import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Overview from '.';
import Loading from '../../../components/Loading';
import Error from '../../../components/Form/Error';

const GET_COLLECTIONS = gql`
	{
		collections {
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

const OverviewContainer = () => (
	<Query query={GET_COLLECTIONS}>
		{({ loading, error, data }) => {
			if (loading) {
				return <Loading />;
			}

			if (error) {
				return (
					<Error>
						There was a problem with receiving the data - please try
						again
					</Error>
				);
			}

			return <Overview shopData={data.collections} />;
		}}
	</Query>
);

export default OverviewContainer;
