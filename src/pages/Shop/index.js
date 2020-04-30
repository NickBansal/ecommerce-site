import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/directory/actions';
import { selectIsCollectionLoaded } from '../../redux/directory/selectors';

import Overview from './Overview';
import Collection from './Collection';
import WithSpinner from '../../components/WithSpinner';

const OverViewLoading = WithSpinner(Overview);
const CollectionLoading = WithSpinner(Collection);

const ShopPage = ({ match, fetchCollections, isLoading }) => {
	// eslint-disable-next-line
	useEffect(() => fetchCollections(), []);

	return (
		<Switch>
			<Route
				exact
				path={`${match.path}`}
				render={props => (
					<OverViewLoading isLoading={!isLoading} {...props} />
				)}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={props => (
					<CollectionLoading isLoading={!isLoading} {...props} />
				)}
			/>
		</Switch>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionLoaded
});

const mapDispatchToProps = dispatch => ({
	fetchCollections: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
