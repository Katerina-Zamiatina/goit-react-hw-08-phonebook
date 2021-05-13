import { NavLink } from 'react-router-dom';
import routes from '../routes';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#6c6767',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

const Navigation = () => {
  return (
    <nav>
      <NavLink
        to={routes.home}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Home
      </NavLink>
      <NavLink
        to={routes.contacts}
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
