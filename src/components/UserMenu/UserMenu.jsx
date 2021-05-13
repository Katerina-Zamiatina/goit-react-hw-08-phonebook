import { useDispatch, useSelector } from 'react-redux';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: '#6c6767',
  },
  button: {
    color: '#6c6767',
    backgroundColor: 'rgb(225, 183, 183)',
    border: '1px solid rgb(225, 183, 183)',
    borderRadius: 5,
    outline: 'none',
    cursor: 'pointer',
  },
};

const UserMenu = () => {
  const dispatch = useDispatch();
  // const name = useSelector();

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome to your Phonebook, name</span>
      <button style={styles.button} type="button" onClick={() => dispatch()}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
