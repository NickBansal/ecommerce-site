import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export default createSelector([selectDirectory], cart => cart.data);
