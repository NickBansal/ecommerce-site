import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HomePage, Shop, SignIn, CheckoutContainer } from '../pages';

const Routes = () => {
	const currentUser = useSelector(state => state.user.currentUser);
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/shop" component={Shop} />
			<Route
				exact
				path="/signin"
				render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
			/>
			<Route path="/checkout" component={CheckoutContainer} />
		</Switch>
	);
};

export default Routes;
