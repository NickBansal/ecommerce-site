import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

import { checkUserSession } from './redux/user/actions';
import { selectCurrentUser } from './redux/user/selectors';

const App = ({ checkUser }) => {
	useEffect(() => {
		checkUser();
		// eslint-disable-next-line
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Routes />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
	checkUser: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
