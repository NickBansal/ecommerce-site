import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CollectionItems from '../../../components/Collections/CollectionItems';

const Preview = styled.div`
	display: flex;
	flex-direction: column;

	.title {
		font-size: 38px;
		margin: 0 auto 30px;
	}

	.items {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 30px;

		@media (min-width: 767px) {
			grid-template-columns: 1fr 1fr 1fr;
		}

		@media (min-width: 992px) {
			grid-template-columns: 1fr 1fr 1fr 1fr;
		}

		& .collection-item {
			margin-bottom: 30px;
		}
	}
`;

const Collection = ({ match }) => {
	const shopData = useSelector(
		state => state.directory.data[match.params.collectionId]
	);

	const { items, title } = shopData;

	return (
		<Preview>
			<h2 className="title">{title.toUpperCase()}</h2>
			<div className="items">
				{items.map(({ id, ...rest }) => (
					<CollectionItems key={id} id={id} {...rest} />
				))}
			</div>
		</Preview>
	);
};

export default withRouter(Collection);
