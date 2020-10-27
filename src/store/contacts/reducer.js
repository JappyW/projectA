import { createReducer } from 'redux/utils';
import { ContactsETypes } from './actions';

const contactsInitialState = {
	collection: [],
	filters: {
		page: null,
		per_page: null,
	},
};

const contactsReducer = createReducer(contactsInitialState, {
	[ContactsETypes.SAVE_CONTACTS](state, action) {
		const { payload } = action;
		return {
			...state,
			collection: payload,
		};
	},
});

export default contactsReducer;
