import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectData = createSelector([selectDirectory], cart => cart.data);

export const selectSections = createSelector(
	[selectDirectory],
	cart => cart.sections
);

export const selectCollection = collectionUrlParam =>
	createSelector([selectData], collections =>
		collections ? collections[collectionUrlParam] : null
	);

export const selectCollectionForPreview = createSelector(
	[selectData],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
);
