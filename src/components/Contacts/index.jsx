import styles from '../Contacts/index.module.css';
import Contact from './Contact';
import { useSelector } from 'react-redux';

const Contacts = () => {
	const contacts = useSelector(state => state.contacts.items);
	const filter = useSelector(state => state.contacts.filter);

	const handleFilter = () => {
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(filter.toLowerCase()),
		);
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

// Contacts.propTypes = {
// 	onDelete: PropTypes.func.isRequired,
// 	onFilter: PropTypes.func.isRequired,
// };
export default Contacts;
