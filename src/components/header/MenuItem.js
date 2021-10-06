import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { removeToken } from '../../services/localStorage';

function MenuItem({ children, to, title }) {
  const { setUser } = useContext(UserContext);

  const handleClickLogout = e => {
    e.preventDefault();
    removeToken();
    setUser(null);
  };

  return (
    <li className="nav-item">
      {title === 'Log out' ? (
        <NavLink exact activeClassName="select" onClick={handleClickLogout} to={to}>
          {children}
        </NavLink>
      ) : (
        <NavLink exact activeClassName="select" to={to}>
          {children}
        </NavLink>
      )}
    </li>
  );
}

export default MenuItem;
