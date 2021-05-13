import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import LoginBar from './LoginBar';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '2px solid rgb(225, 183, 183)',
  },
};

const AppBar = () => {
  // const isLogged = useSelector();
  return (
    <header style={styles.header}>
      <Navigation />
      {false ? <UserMenu /> : <LoginBar />}
    </header>
  );
};

export default AppBar;
