import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/directory/actions';

import {
	OverviewContainer,
	CollectionsContainer
} from '../../components/Collections/Containers';

const ShopPage = ({ match }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCollectionsStart());
		// eslint-disable-next-line
	}, []);

	return (
		<Switch>
			<Route exact path={`${match.path}`} component={OverviewContainer} />
			<Route
				path={`${match.path}/:collectionId`}
				component={CollectionsContainer}
			/>
		</Switch>
	);
};

export default ShopPage;
