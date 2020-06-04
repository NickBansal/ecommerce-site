import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Collection from './Collection/container';
import OverviewContainer from './Overview/container';

const ShopPage = ({ match }) => (
	<Switch>
		<Route exact path={`${match.path}`} component={OverviewContainer} />
		<Route path={`${match.path}/:collectionId`} component={Collection} />
	</Switch>
);

export default ShopPage;
