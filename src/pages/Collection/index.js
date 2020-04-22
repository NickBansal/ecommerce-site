import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/directory/selectors';

import CollectionItems from '../../components/Collections/Items';

const Preview = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Title = styled.h2`
	font-size: 28px;
	margin-bottom: 25px;
`;

const Collection = ({
	match: {
		params: { collectionId }
	},
	shopData
}) => (
	<>
		<Title>{collectionId.toUpperCase()}</Title>
		<Preview>
			{shopData.items.map(({ id, ...rest }) => (
				<CollectionItems key={id} id={id} {...rest} />
			))}
		</Preview>
	</>
);

const mapStateToProps = (state, ownProps) => ({
	shopData: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
