import React from 'react';
import styled from 'styled-components';

import CollectionItemsContainer from '../../../components/CollectionItems/container';

const Preview = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		display: grid;
		grid-template: 1fr 1fr;
		grid-gap: 15px;
	}

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

const Collection = ({ data }) => {
	const { items, title } = data;

	return (
		<Preview>
			<h2 className="title">{title.toUpperCase()}</h2>
			<div className="items">
				{items.map(({ id, ...rest }) => (
					<CollectionItemsContainer key={id} id={id} {...rest} />
				))}
			</div>
		</Preview>
	);
};

export default Collection;
