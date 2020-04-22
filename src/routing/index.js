import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/selectors';
import { HomePage, Shop, SignIn, Checkout } from '../pages';

const Routes = ({ currentUser }) => (
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Routes);
