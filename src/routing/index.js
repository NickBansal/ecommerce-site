import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../redux/user/selectors';
import { HomePage, Hats, Shop, SignIn } from '../pages';

const Routes = ({ currentUser }) => (
	<Switch>
		<Route exact path="/" component={HomePage} />
		<Route path="/hats" component={Hats} />
		<Route path="/shop" component={Shop} />
		<Route
			exact
			path="/signin"
			render={() => (currentUser ? <Redirect to="/" /> : <SignIn />)}
		/>
	</Switch>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Routes);
