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
  const [error, setError] = useState('');

  const { setUser } = useContext(UserContext);

  const history = useHistory();

  const handleSubmitLogin = async e => {
    e.preventDefault();

    let isError = false;

    try {
      if (username.trim() === '') {
        setError(currErr => ({ ...currErr, username: '**Please enter your username' }));
        isError = true;
      }

      if (password.trim() === '') {
        setError(currErr => ({ ...currErr, password: '**Please enter your password' }));
        isError = true;
      } else if (password.length < 6) {
        console.log(password.trim().length);
        setError(currErr => ({ ...currErr, password: '**Password validation is at least 6 character' }));
        isError = true;
        setPassword('');
      }
      if (!isError) {
        const res = await axios.post('/login', { username, password });
        setToken(res.data.token);
        setUser(jwtDecode(res.data.token));
        history.push('/');
      }
    } catch (err) {
      console.dir(err);
      if (err.response.data.messageUsername) {
        setError(currErr => ({ ...currErr, username: err.response.data.messageUsername }));
        setUsername('');
      }
      if (err.response.data.messagePassword) {
        setError(currErr => ({ ...currErr, password: err.response.data.messagePassword }));
        setPassword('');
      }
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
              className={error.username ? 'errorMessage' : 'normalMessage'}
              placeholder={error.username ? error.username : 'USERNAME/ชื่อบัญชีผู้ใช้'}
              value={username}
              onChange={e => {
                setError(curr => ({ ...curr, username: '' }));
                setUsername(e.target.value);
              }}
            />
            <input
              type="password"
              id="password"
              name="password"
              className={error.password ? 'errorMessage' : 'normalMessage'}
              placeholder={error.password ? error.password : 'PASSWORD/รหัสผ่าน'}
              value={password}
              onChange={e => {
                setError(curr => ({ ...curr, password: '' }));
                setPassword(e.target.value);
              }}
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
