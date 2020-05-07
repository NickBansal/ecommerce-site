import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/directory/actions';

import Collection from './Collection';
import Overview from './Overview';

const ShopPage = ({ match }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollectionsStart());
		// eslint-disable-next-line
	}, []);

	return (
		<Switch>
			<Route exact path={`${match.path}`} component={Overview} />
			<Route
				path={`${match.path}/:collectionId`}
				component={Collection}
			/>
		</Switch>
	);
};

export default ShopPage;
