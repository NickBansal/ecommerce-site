import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, HatsPage, ShopPage } from '../pages';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/hats" component={HatsPage} />
		<Route path="/shop" component={ShopPage} />
	</Switch>
);

export default Routes;
