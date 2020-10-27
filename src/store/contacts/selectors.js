import { createSelector } from 'reselect';

const _getContactsState = (state) => state.contacts;

export const _getContactsCollection = createSelector(
	[_getContactsState],
	(collection) => collection,
);
