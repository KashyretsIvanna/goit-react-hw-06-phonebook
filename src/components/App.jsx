import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/app.module.css';
import { useEffect } from 'react';
import * as actions from '../redux/phonebook-actions';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';

const App = () => {
	const contacts = useSelector(state => state.contacts.items);
	const dispatch = useDispatch();
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(contacts));
	}, [contacts]);

	useEffect(() => {
		if (localStorage.getItem('todos')) {
			const items = JSON.parse(localStorage.getItem('todos'));
			console.log(items);
			dispatch(actions.setContacts(items));
		}
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<h2>Phonebook</h2>
			<Form />
			<h2>Contacts</h2>
			<Filter />
			<Contacts />
		</div>
	);
};

// contactsFromRedux
export default App;
