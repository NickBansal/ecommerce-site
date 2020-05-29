import React, { useContext } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import CollectionItems from '../../../components/CollectionItems';
import Loading from '../../../components/Loading';

import CollectionsContext from '../../../context/collections';

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

const Collection = () => {
	const { collectionId } = useParams();
	const { collection } = useContext(CollectionsContext);

	if (!collection) {
		return <Loading />;
	}

	const { items, title } = collection[collectionId];

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

export default Collection;
