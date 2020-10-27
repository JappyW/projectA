import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import contactsReducer from './contacts/reducer';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	contacts: contactsReducer,
});

export { createRootReducer };
