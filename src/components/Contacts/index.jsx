import styles from '../Contacts/index.module.css';
import Contact from './Contact';
import * as actions from '../../redux/phonebook-actions';
import { connect } from 'react-redux';

const Contacts = ({ contactsFromRedux, filterFromRedux }) => {
	const handleFilter = () => {
		if (filterFromRedux) {
			return contactsFromRedux.filter(contact =>
				contact.name.toLowerCase().includes(filterFromRedux.toLowerCase()),
			);
		} else {
			return contactsFromRedux;
		}
	};

	return (
		<div>
			<ul className={styles.contacts}>
				{handleFilter().map(contact => {
					return (
						<Contact
							key={contact.id}
							number={contact.number}
							name={contact.name}
							id={contact.id}
						/>
					);
				})}
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		contactsFromRedux: state.contacts.items,
		filterFromRedux: state.contacts.filter,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setContactsToRedux: obj => dispatch(actions.setContacts(obj)),
	};
};

// Contacts.propTypes = {
// 	onDelete: PropTypes.func.isRequired,
// 	onFilter: PropTypes.func.isRequired,
// };
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
