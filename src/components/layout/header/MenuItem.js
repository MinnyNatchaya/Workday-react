import { NavLink } from 'react-router-dom';

function MenuItem({ children, to }) {
  return (
    <li className="nav-item">
      <NavLink exact activeClassName="select" to={to}>
        {children}
      </NavLink>
    </li>
  );
}

export default MenuItem;
