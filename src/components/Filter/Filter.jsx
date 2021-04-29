import { connect } from 'react-redux';
import styles from './Filter.module.css';
import { filterContact } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    <span className={styles.label__text}>Filter by name</span>

    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter name for search"
    />
  </label>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
