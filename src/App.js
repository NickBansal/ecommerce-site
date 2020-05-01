import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

import setCurrentUser from './redux/user/actions';

import { auth } from './firebase/utils';
import createUserProfileDocument from './firebase/createUser';

const App = ({ dispatch }) => {
	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			const userRef = await createUserProfileDocument(userAuth);

			if (userAuth) {
				userRef.onSnapshot(snapShot => {
					dispatch(
						setCurrentUser({
							id: snapShot.id,
							...snapShot.data()
						})
					);
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

export default connect()(App);
