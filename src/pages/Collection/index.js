import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectData } from '../../redux/directory/selectors';

import CollectionItems from '../../components/Collections/Items';

const Preview = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	.title {
		font-size: 28px;
		margin-bottom: 25px;
	}

	.preview {
		display: flex;
		justify-content: space-between;
	}
`;

const Collection = ({
	match: {
		params: { collectionId }
	},
	shopData
}) => (
	<Preview>
		<h2 className="title">{collectionId.toUpperCase()}</h2>
		<div className="preview">
			{shopData
				.filter(item => item.routeName === collectionId)[0]
				.items.map(({ id, ...rest }) => (
					<CollectionItems key={id} id={id} {...rest} />
				))}
		</div>
	</Preview>
);

const mapStateToProps = createStructuredSelector({
	shopData: selectData
});

export default connect(mapStateToProps)(Collection);
