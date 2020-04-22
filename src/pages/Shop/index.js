import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CollectionOverview from '../../components/Collections/Overview';
import Collection from '../Collection';

const ShopPage = ({ match }) => (
	<Switch>
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route path={`${match.path}/:collectionId`} component={Collection} />
	</Switch>
);

export default ShopPage;
