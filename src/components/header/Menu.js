import MenuItem from './MenuItem';

const menu = [
  {
    to: '/',
    title: 'หน้าหลัก'
  },
  {
    to: '/service',
    title: 'บริการของเรา'
  },
  {
    to: '/signup-worker',
    title: 'สมัครเป็นผู้ให้บริการ'
  },
  {
    to: '/login',
    title: 'เข้าสู่ระบบ'
  }
];

function Menu() {
  return (
    <nav>
      <ul>
        {menu.map(item => (
          <MenuItem key={item.title} to={item.to}>
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
