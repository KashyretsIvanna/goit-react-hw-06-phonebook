import styles from './index.module.css';
import PropTypes from 'prop-types';
import * as actions from '../../../redux/phonebook-actions';
import { useDispatch } from 'react-redux';

const Contact = ({ id, number, name }) => {
	const dispatch = useDispatch();
	return (
		<li className={styles.li}>
			{name + ': ' + number}
			<button
				className={styles.button}
				onClick={() => {
					dispatch(actions.deleteContacts(id));
				}}
			>
				Delete
			</button>
		</li>
	);
};

Contact.propTypes = {
	number: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default Contact;
