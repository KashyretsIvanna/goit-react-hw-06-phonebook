import { Fragment } from 'react';
import styles from '../Filter/index.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/phonebook-actions';

const Filter = ({ filterFromRedux, setFilterToRedux }) => {
	return (
		<Fragment>
			<p className={styles.p}>Find contacts by name</p>
			<input
				className={styles.input}
				type="text"
				value={filterFromRedux}
				onChange={e => {
					setFilterToRedux(e.target.value);
				}}
			/>
		</Fragment>
	);
};
// Filter.propTypes = {
// 	onFilter: PropTypes.func.isRequired,
// 	filter: PropTypes.string.isRequired,
// };

const mapStateToProps = state => {
	return {
		filterFromRedux: state.reducer.contacts.filter,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setFilterToRedux: text => dispatch(actions.setFilter(text)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
