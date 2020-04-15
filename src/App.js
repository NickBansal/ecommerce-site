import React from 'react';

import GlobalStyle from './utils/globalStyles';
import Routes from './routing';
import Header from './components/Header';

const App = () => (
	<div>
		<GlobalStyle />
		<Header />
		<Routes />
	</div>
);

export default App;
