import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/app.module.css';
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';

const App = ({ contactsFromRedux }) => {
	useEffect(() => {
		if (localStorage.getItem('todos')) {
			localStorage.getItem(JSON.parse(localStorage.getItem('todos')));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(contactsFromRedux));
	}, [contactsFromRedux]);

	return (
		<div className={styles.app}>
			<h2>Phonebook</h2>
			<Form />
			<h2>Contacts</h2>
			<Filter />
			<Contacts/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		contactsFromRedux: state.reducer.contacts.items,
		
	};
};


export default connect(mapStateToProps)(App);
