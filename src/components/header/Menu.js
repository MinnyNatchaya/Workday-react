import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import MenuItem from './MenuItem';

const menuGuest = [
  {
    to: '/signup-worker',
    title: 'Work with Us'
  },
  {
    to: '/login',
    title: 'Log in'
  }
];

const menuUser = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/service',
    title: 'Service'
  },
  {
    to: '/profile-orders',
    title: 'Orders'
  },
  {
    to: '/profile',
    title: 'Profile'
  },
  {
    to: '/login',
    title: 'Log out'
  }
];

function Menu() {
  const { role } = useContext(UserContext);

  return (
    <nav>
      <ul>
        {role === 'guest'
          ? menuGuest.map(item => (
              <MenuItem key={item.title} to={item.to}>
                {item.title}
              </MenuItem>
            ))
          : menuUser.map(item => (
              <MenuItem key={item.title} to={item.to} title={item.title}>
                {item.title}
              </MenuItem>
            ))}
      </ul>
    </nav>
  );
}

export default Menu;
