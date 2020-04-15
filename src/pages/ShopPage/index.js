import React from 'react';

import CollectionPreview from '../../components/CollectionPreview';
import shopData from '../../constants/shopData';

const ShopPage = () => (
	<div>
		{shopData.map(({ id, ...rest }) => (
			<CollectionPreview key={id} {...rest} />
		))}
	</div>
);

export default ShopPage;
