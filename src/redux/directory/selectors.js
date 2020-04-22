import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5
};

export const selectData = createSelector([selectDirectory], cart => cart.data);

export const selectSections = createSelector(
	[selectDirectory],
	cart => cart.sections
);

export const selectCollection = collectionUrlParam =>
	createSelector([selectData], collections =>
		collections.find(
			item => item.id === COLLECTION_ID_MAP[collectionUrlParam]
		)
	);
