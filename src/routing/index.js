import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, HatsPage } from '../pages';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route exact path="/hats" component={HatsPage} />
	</Switch>
);

export default Routes;
