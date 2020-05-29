import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import CollectionItems from '../../../components/CollectionItems';
import Loading from '../../../components/Loading';

import CollectionsContext from '../../../context/collections';

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

const CollectionOverview = () => {
	const { collection } = useContext(CollectionsContext);

	if (!collection) {
		return <Loading />;
	}

	const shopData = Object.keys(collection).map(key => collection[key]);

	return (
		<div>
			{shopData.map(({ items, title, routeName }) => {
				return (
					<Preview key={title}>
						<Link to={`/shop/${routeName}`}>
							<h1 className="title">{title.toUpperCase()}</h1>
						</Link>
						<div className="preview">
							{items.slice(0, 4).map(({ id, ...rest }) => (
								<CollectionItems key={id} id={id} {...rest} />
							))}
						</div>
					</Preview>
				);
			})}
		</div>
	);
};

export default CollectionOverview;
