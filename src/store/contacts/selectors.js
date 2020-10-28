import { createSelector } from 'reselect';

const _getContactsState = (state) => state.contacts;

export const _getContactsCollection = createSelector(
	[_getContactsState],
	(contacts) => contacts.collection,
);

export const _getContactsFilters = createSelector(
	[_getContactsState],
	(contacts) => contacts.filters,
);

export const _getContactsErros = createSelector(
	[_getContactsState],
	(contacts) => contacts.error,
);
