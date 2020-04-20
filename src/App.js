import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

import { setCurrentUser } from './redux/user/actions';

import { auth } from './firebase/utils';
import createUserProfileDocument from './firebase/createUser';

const App = ({ setUser }) => {
	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			const userRef = await createUserProfileDocument(userAuth);

			if (userAuth) {
				userRef.onSnapshot(snapShot => {
					setUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});

		return () => unsubscribeFromAuth();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Routes />
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	setUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
