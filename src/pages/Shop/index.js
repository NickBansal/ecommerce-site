import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../../components/CollectionPreview';

import selectDirectory from '../../redux/directory/selectors';

const ShopPage = ({ shopData }) => (
	<div>
		{shopData.map(({ id, ...rest }) => (
			<CollectionPreview key={id} {...rest} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	shopData: selectDirectory
});

export default connect(mapStateToProps)(ShopPage);
