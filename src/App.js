import React, { useEffect, useState } from 'react';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

import CurrentUserContext from './context/currentUser';
import { auth } from './firebase/utils';
import createUser from './firebase/createUser';

const App = () => {
	const [state, setState] = useState(null);

	useEffect(() => {
		let unsubscribeFromAuth = null;
		unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUser(userAuth);

				userRef.onSnapshot(snapShot => {
					setState({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}

			setState(userAuth);
		});

		return () => unsubscribeFromAuth();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<GlobalStyle />
			<CurrentUserContext.Provider value={state}>
				<Header />
				<Routes />
			</CurrentUserContext.Provider>
		</div>
	);
};

export default App;
