import { all, fork } from "redux-saga/effects";
import { watcherGetContactsCollection, watcherSetFiltersWatcher } from "./contacts/sagas";

export default function* rootSaga() {
  yield all([
    fork(watcherGetContactsCollection),
    fork(watcherSetFiltersWatcher)
  ]);
}
