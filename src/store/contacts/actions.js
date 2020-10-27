import { createAction } from '../utils';

export const ContactsETypes = {
	FETCH_CONTACTS: '@contacts/FETCH_CONTACTS',
	SAVE_CONTACTS: '@contacts/SAVE_CONTACTS',
	SET_FILTERS: '@contacts/SET_FILTERS',
	RECEIVE_CONTACTS_COLLECTION_ERROR: '@contacts/RECEIVE_CONTACTS_COLLECTION_ERROR'
}

export const fetchContacts = createAction(ContactsETypes.FETCH_CONTACTS);
export const saveContacts = createAction(ContactsETypes.SAVE_CONTACTS);
export const setContactsFilters = createAction(ContactsETypes.SET_FILTERS);
