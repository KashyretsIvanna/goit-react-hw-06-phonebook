import { nanoid } from 'nanoid';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import styles from '../components/app.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux/es/exports';
import * as actions from '../redux/phonebook-actions';

const App = ({ contactsFromRedux, setContactsToRedux }) => {
	const [filter, setFilter] = useState('');

	useEffect(() => {
		if (localStorage.getItem('todos')) {
			localStorage.getItem(JSON.parse(localStorage.getItem('todos')));
		}
		console.log('get state from ls');
	}, []);



	useEffect(() => {
		console.log('state was updated');

		localStorage.setItem('todos', JSON.stringify(contactsFromRedux));
	}, [contactsFromRedux]);

	

	const handleSubmit = (name, number) => {
		let loginInputId = nanoid();
		setContactsToRedux([...contactsFromRedux,{ id: loginInputId, name: name, number: number }]);
		// setContacts(contacts => [
		// 	...contacts,
		// 	{ id: loginInputId, name: name, number: number },
		// ]);
	};

	const handleChange = e => {
		setFilter(e.target.value);
	};

	const handleDelete = itemId => {
		console.log("del")
		setContactsToRedux(contactsFromRedux.filter(el => el.id !== itemId))
		// setContacts(contacts => contacts.filter(el => el.id !== itemId));
	};

	const handleFilter = () => {
		if(filter){return contactsFromRedux.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase()),
		)}else{
			return contactsFromRedux
		}
		
	};

	return (
		<div className={styles.app}>
			<h2>Phonebook</h2>
			<Form contacts={contactsFromRedux} onSubmit={handleSubmit} />
			<h2>Contacts</h2>
			<Filter onFilter={handleChange} filter={filter} />
			<Contacts onDelete={handleDelete} onFilter={handleFilter} />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		contactsFromRedux: state.reducer.contacts.items,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setContactsToRedux: obj => dispatch(actions.setContacts(obj)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
