import React from 'react';
import { connect } from 'react-redux';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

const App = () => {
	// useEffect(() => {
	// let unsubscribeFromAuth = null;
	// unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
	// 	const userRef = await createUserProfileDocument(userAuth);

	// 	if (userAuth) {
	// 		userRef.onSnapshot(snapShot => {
	// 			dispatch(
	// 				setCurrentUser({
	// 					id: snapShot.id,
	// 					...snapShot.data()
	// 				})
	// 			);
	// 		});
	// 	} else {
	// 		setCurrentUser(userAuth);
	// 	}
	// });

	// return () => unsubscribeFromAuth();
	// eslint-disable-next-line
	// }, []);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<Routes />
		</div>
	);
};

export default connect()(App);
