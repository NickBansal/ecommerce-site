import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/directory/actions';
import { selectIsCollectionFetching } from '../../redux/directory/selectors';

import Overview from './Overview';
import Collection from './Collection';
import WithSpinner from '../../components/WithSpinner';

const OverViewLoading = WithSpinner(Overview);
const CollectionLoading = WithSpinner(Collection);

const ShopPage = ({ match, fetchCollections, isFetching }) => {
	useEffect(() => {
		fetchCollections();

		// |------------- SUBSCRIBE TO LIVE DATA -------------|
		// let unsubscribeFromSnapshot = null;
		// const collectionRef = firestore.collection('collections');
		// unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
		// 	const dataCollection = convertCollectionsToMap(snapshot);
		// 	dispatch(setCurrentData(dataCollection));
		// 	setLoading(false);
		// });
		// return () => unsubscribeFromSnapshot();
		// |------------ UNSUBSCRIBE TO LIVE DATA ------------|

		// eslint-disable-next-line
	}, []);

	return (
		<Switch>
			<Route
				exact
				path={`${match.path}`}
				render={props => (
					<OverViewLoading isLoading={isFetching} {...props} />
				)}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={props => (
					<CollectionLoading isLoading={isFetching} {...props} />
				)}
			/>
		</Switch>
	);
};

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
	fetchCollections: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
