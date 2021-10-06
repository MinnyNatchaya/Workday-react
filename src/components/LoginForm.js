import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../config/axios';
import jwtDecode from 'jwt-decode';
import { UserContext } from '../contexts/userContext';
import { setToken } from '../services/localStorage';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const history = useHistory();

  const handleSubmitLogin = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { username, password });
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="all_login_page" onSubmit={handleSubmitLogin}>
      <div className="container">
        <div className="container1">
          <h1>WORKDAY</h1>
          <h3>เรื่องบ้าน เรื่องง่าย ครบจบในที่เดียว</h3>
        </div>

        <div className="container2">
          <h2>เข้าสู่ระบบ</h2>

          <div className="inputLogin">
            <input
              type="text"
              id="userName"
              name="userName"
              placeholder="USERNAME/ชื่อบัญชีผู้ใช้"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="PASSWORD/รหัสผ่าน"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className="btn">
            <button type="submit" className="btnSignin">
              ลงชื่อเข้าใช้
            </button>

            <Link to="/signup">
              <button className="btnSignUp">สมัครสมาชิก</button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
