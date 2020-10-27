import { ContactsETypes } from "./actions";

const initialState = {
	collection: [],
	filters: {
		page: null,
		per_page: null,
	},
	error: null
};

function contactsReducer(state = initialState, action) {
	switch (action.type) {
		case ContactsETypes.SAVE_CONTACTS: {
			const { payload } = action;
			return {
				...state,
				collection: payload,
			};
		}
		case ContactsETypes.SET_FILTERS: {
			const { payload } = action;
			return {
				...state,
				filters: {
					...state.filters,
					...payload,
				},
			};
		}
		case ContactsETypes.RECEIVE_CONTACTS_COLLECTION_ERROR: {
			const { payload } = action;
			return {
				...state,
				error: payload
			};
		}
		default:
			return state;
	}
  }
export default contactsReducer;
