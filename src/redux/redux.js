import { createStore } from 'redux';
import reducer from './phonebook-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		reducer,
	},
});


export default store;
