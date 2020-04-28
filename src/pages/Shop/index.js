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
		const collectionRef = firestore.collection('collections');

		// |------------- SUBSCRIBE TO LIVE DATA -------------|

		// let unsubscribeFromSnapshot = null;
		// unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
		// 	const dataCollection = convertCollectionsToMap(snapshot);
		// 	dispatch(setCurrentData(dataCollection));
		// 	setLoading(false);
		// });

		// return () => unsubscribeFromSnapshot();

		// |------------ UNSUBSCRIBE TO LIVE DATA ------------|

		collectionRef.get().then(snapshot => {
			const dataCollection = convertCollectionsToMap(snapshot);
			dispatch(setCurrentData(dataCollection));
			setLoading(false);
		});

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
