import React, { useEffect, useState } from 'react';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

import { auth } from './firebase/utils';
import createUserProfileDocument from './firebase/createUser';

const App = () => {
	const [currentUser, setUser] = useState(null);

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
				setUser(userAuth);
			}
		});

		return () => unsubscribeFromAuth();
	}, []);

	console.log(currentUser);

	return (
		<div>
			<GlobalStyle />
			<Header currentUser={currentUser} />
			<Routes />
		</div>
	);
};

export default App;
