import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { firestore } from '../../firebase/utils';
import convertCollectionsToMap from '../../firebase/convertCollectionsToMap';

import CollectionContext from '../../context/collections';

import Collection from './Collection';
import Overview from './Overview';

const ShopPage = ({ match }) => {
	const [collection, setCollection] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const collectionRef = firestore.collection('collections');

		collectionRef
			.get()
			.then(snapshot => {
				const collectionsMap = convertCollectionsToMap(snapshot);
				setError(null);
				setCollection(collectionsMap);
			})
			.catch(err => {
				setError(err);
			});
		// eslint-disable-next-line
	}, []);

	return (
		<CollectionContext.Provider value={{ collection, error }}>
			<Switch>
				<Route exact path={`${match.path}`} component={Overview} />
				<Route
					path={`${match.path}/:collectionId`}
					component={Collection}
				/>
			</Switch>
		</CollectionContext.Provider>
	);
};

export default ShopPage;
