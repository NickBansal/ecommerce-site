import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/directory/actions';

import {
	OverviewContainer,
	CollectionsContainer
} from '../../components/Collections/Containers';

const ShopPage = ({ match, fetchCollections }) => {
	// eslint-disable-next-line
	useEffect(() => fetchCollections(), []);

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

const mapDispatchToProps = dispatch => ({
	fetchCollections: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
