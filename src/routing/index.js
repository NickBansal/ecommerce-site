import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import CurrentUserContext from '../context/currentUser';

import { HomePage, Shop, SignIn, Checkout } from '../pages';

const Routes = () => {
	const currentUser = useContext(CurrentUserContext);

	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/shop" component={Shop} />
			<Route
				exact
				path="/signin"
				render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
			/>
			<Route path="/checkout" component={Checkout} />
		</Switch>
	);
};

export default Routes;
