import React, { useEffect, useState } from 'react';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

import { auth } from './firebase/utils';
import createUserProfileDocument from './firebase/createUser';

const App = () => {
	const [currentUser, setUser] = useState(null);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			createUserProfileDocument(user);
		});

		return () =>
			auth.onAuthStateChanged(user => {
				setUser(user);
			});
	}, [currentUser]);

	return (
		<div>
			<GlobalStyle />
			<Header currentUser={currentUser} />
			<Routes />
		</div>
	);
};

export default App;
