import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/directory/selectors';

import CollectionItems from '../../components/Collections/Items';

const Preview = styled.div`
	display: flex;
	flex-direction: column;

	.title {
		font-size: 38px;
		margin: 0 auto 30px;
	}

	.items {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 10px;

		& .collection-item {
			margin-bottom: 30px;
		}
	}
`;

const Collection = ({ shopData }) => {
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

const mapStateToProps = (state, ownProps) => ({
	shopData: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
