import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../redux/phonebook-actions';

const items = [
	{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
	{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
	{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
	{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsLoc = JSON.parse(localStorage.getItem('todos'));

const itemsReducer = createReducer(itemsLoc ? itemsLoc : items, {
	[actions.setContacts.type]: (_, act) => act.payload,
	[actions.deleteContacts.type]: (state, act) =>
		state.filter(el => el.id !== act.payload),
	[actions.addContacts.type]: (state, act) => [...state, act.payload],
});

const filterReducer = createReducer('', {
	[actions.setFilter.type]: (_, act) => act.payload,
});

const contactsReducer = combineReducers({
	items: itemsReducer,
	filter: filterReducer,
});

export default contactsReducer;
