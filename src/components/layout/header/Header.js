import { Link } from 'react-router-dom';
import Menu from './Menu';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <i className="fas fa-bars"></i>
          <Link to={'/'}>
            <h2>WORKDAY</h2>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;
