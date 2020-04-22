import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CollectItems from '../Items';

const Preview = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 10px;

	.title {
		font-size: 28px;
		margin-bottom: 25px;

		&:hover {
			text-decoration: underline;
		}
	}

	.preview {
		display: flex;
		justify-content: space-between;
	}
`;

const CollectionPreview = ({ title, items, routeName }) => (
	<Preview>
		<Link to={`/shop/${routeName}`}>
			<h1 className="title">{title.toUpperCase()}</h1>
		</Link>
		<div className="preview">
			{items.slice(0, 4).map(({ id, ...rest }) => (
				<CollectItems key={id} id={id} {...rest} />
			))}
		</div>
	</Preview>
);

export default CollectionPreview;
