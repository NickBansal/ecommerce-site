import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

import { checkUserSession } from './redux/user/actions';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(checkUserSession());
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

export default App;
