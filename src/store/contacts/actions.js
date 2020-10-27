import { createAction } from '../utils';

export const ContactsETypes = {
	FETCH_CONTACTS: '@contacts/FETCH_CONTACTS',
	SAVE_CONTACTS: '@contacts/SAVE_CONTACTS',
}

export const fetchContacts = createAction(ContactsETypes.FETCH_CONTACTS);
export const saveContacts = createAction(ContactsETypes.SAVE_CONTACTS);
