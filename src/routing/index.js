import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HomePage, Hats, Shop, SignIn } from '../pages';

const Routes = () => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/hats" component={Hats} />
		<Route path="/shop" component={Shop} />
		<Route path="/signin" component={SignIn} />
	</Switch>
);

export default Routes;
