import styles from './index.module.css';
import PropTypes from 'prop-types';
import * as actions from '../../../redux/phonebook-actions';
import { connect } from 'react-redux';

const Contact = ({
	contactsFromRedux,
	setContactsToRedux,
	id,
	number,
	name,
}) => {
	
	const handleDelete = itemId => {
		setContactsToRedux(contactsFromRedux.filter(el => el.id !== itemId));
	};

	return (
		<li className={styles.li}>
			{name + ': ' + number}
			<button
				className={styles.button}
				onClick={() => {
					handleDelete(id);
				}}
			>
				Delete
			</button>
		</li>
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

Contact.propTypes = {
	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);

