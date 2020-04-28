import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestore } from '../../firebase/utils';
import convertCollectionsToMap from '../../firebase/convertCollectionsToMap';

import { setCurrentData } from '../../redux/directory/actions';

import Overview from './Overview';
import Collection from './Collection';
import WithSpinner from '../../components/WithSpinner';

const OverViewLoading = WithSpinner(Overview);
const CollectionLoading = WithSpinner(Collection);

const ShopPage = ({ match, dispatch }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let unsubscribeFromSnapshot = null;
		const collectionRef = firestore.collection('collections');

		unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
			const dataCollection = convertCollectionsToMap(snapshot);
			dispatch(setCurrentData(dataCollection));
			setLoading(false);
		});

		return () => unsubscribeFromSnapshot();
		// eslint-disable-next-line
	}, []);

	return (
		<Switch>
			<Route
				exact
				path={`${match.path}`}
				render={props => (
					<OverViewLoading isLoading={loading} {...props} />
				)}
			/>
			<Route
				path={`${match.path}/:collectionId`}
				render={props => (
					<CollectionLoading isLoading={loading} {...props} />
				)}
			/>
		</Switch>
	);
};

export default connect()(ShopPage);
