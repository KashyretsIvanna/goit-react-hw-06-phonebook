import contactsReducer from './phonebook-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
	reducer: {
		contacts: contactsReducer,
	},
	middleware,
});

export default store;
