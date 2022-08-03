import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/app.module.css';
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import * as actions from '../redux/phonebook-actions';

const App = ({ contactsFromRedux, setContacts }) => {
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(contactsFromRedux));
	}, [contactsFromRedux]);

	useEffect(() => {
		if (localStorage.getItem('todos')) {
			const items = JSON.parse(localStorage.getItem('todos'));
			console.log(items);
			setContacts(items);
		}
	}, [setContacts]);

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

const mapStateToProps = state => {
	return {
		contactsFromRedux: state.contacts.items,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setContacts: cont => dispatch(actions.setContacts(cont)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
