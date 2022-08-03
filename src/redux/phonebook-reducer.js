import { combineReducers } from 'redux';
import types from '../redux/action-types';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../redux/phonebook-actions';

const items = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

// const itemsReducer = (state = items, action) => {
// 	switch (action.type) {
// 		case types.SETCONTACTS:
// 			return action.payload;

// 		default:
// 			return state;
// 	}
// };

const itemsReducer = createReducer(items, {
	[actions.setContacts.type]: (_, act) => act.payload,
    // [actions.filterContacts.type]: (_, act) => act.payload,
    // [actions.deleteContacts.type]: (_, act) => act.payload,
});

const filterReducer = createReducer("",{
	[actions.setFilter.type]: (_, act) => act.payload,
});

// const filterReducer = (state = '', action) => {
// 	switch (action.type) {
// 		case types.FILTER:
// 			return action.payload;

// 		default:
// 			return state;
// 	}
// };

const contactsReducer = combineReducers({
	items: itemsReducer,
	filter: filterReducer,
});

export default contactsReducer;
