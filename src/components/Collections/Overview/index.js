import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../../redux/directory/selectors';

import CollectionPreview from '../Preview';

const CollectionOverview = ({ shopData }) => {
	return (
		<div>
			{shopData.map(({ id, ...rest }) => (
				<CollectionPreview key={id} {...rest} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	shopData: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
