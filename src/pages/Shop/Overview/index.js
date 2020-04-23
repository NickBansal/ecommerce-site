import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../../redux/directory/selectors';

import CollectionItems from '../../../components/CollectionItems';

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

const CollectionOverview = ({ shopData }) => {
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

const mapStateToProps = createStructuredSelector({
	shopData: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
