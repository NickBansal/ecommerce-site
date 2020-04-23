import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Overview from './Overview';
import Collection from './Collection';

const ShopPage = ({ match }) => (
	<Switch>
		<Route exact path={`${match.path}`} component={Overview} />
		<Route path={`${match.path}/:collectionId`} component={Collection} />
	</Switch>
);

export default ShopPage;
