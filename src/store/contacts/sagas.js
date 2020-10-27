import { call, put, select, takeLatest } from "redux-saga/effects";
import { getContactsCollection } from "services/api/contacts";
import { ContactsETypes, fetchContacts, saveContacts } from "./actions";
import { _getContactsFilters } from "./selectors";

function* workerGetContactsCollection() {
	try {
	const filters = yield select(_getContactsFilters);
	console.log(filters)
    const response = yield call(getContactsCollection, filters);
		if (response.status === "success") {
			yield put(saveContacts(response.data));
		} else {
			yield {
				type: ContactsETypes.RECEIVE_CONTACTS_COLLECTION_ERROR,
				payload: "Error getting contact collection",
			};
		}
	} catch (e) {
		throw e;
	}
}

export function* watcherGetContactsCollection() {
	yield takeLatest(
		ContactsETypes.FETCH_CONTACTS,
		workerGetContactsCollection
	);
}

function* workerSetFilters() {
	yield put(fetchContacts());
}

export function* watcherSetFiltersWatcher() {
	yield takeLatest(ContactsETypes.SET_FILTERS, workerSetFilters);
}
