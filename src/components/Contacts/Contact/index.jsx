import styles from './index.module.css';
import PropTypes from 'prop-types';
import * as actions from '../../../redux/phonebook-actions';
import { connect } from 'react-redux';

const Contact = ({ deleteItem, id, number, name }) => {
	return (
		<li className={styles.li}>
			{name + ': ' + number}
			<button
				className={styles.button}
				onClick={() => {
					deleteItem(id);
				}}
			>
				Delete
			</button>
		</li>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		setContactsToRedux: obj => dispatch(actions.setContacts(obj)),
		deleteItem: id => dispatch(actions.deleteContacts(id)),
	};
};

Contact.propTypes = {
	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Contact);
