import React from 'react';
import styled from 'styled-components';

import CollectItems from '../CollectionItems';

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

const CollectionPreview = ({ title, items }) => (
	<Preview>
		<h1 className="title">{title}</h1>
		<div className="preview">
			{items.slice(0, 4).map(({ id, ...rest }) => (
				<CollectItems key={id} id={id} {...rest} />
			))}
		</div>
	</Preview>
);

export default CollectionPreview;
