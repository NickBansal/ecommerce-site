import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CollectionContainer from './Collection/container';
import OverviewContainer from './Overview/container';

const ShopPage = () => {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={`${match.path}`} component={OverviewContainer} />
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionContainer}
			/>
		</Switch>
	);
};

export default ShopPage;
