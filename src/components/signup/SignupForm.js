import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState('');

  const history = useHistory();

  const handleSubmitSignUp = e => {
    e.preventDefault();
    axios
      .post('/signup', { firstName, lastName, username, password, birthDate, telephone, gender })
      .then(() => {
        history.push({
          pathname: '/login',
          state: { message: 'Your account has benn created' }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="inputSignUpUser">
        <input
          type="text"
          id="fName"
          name="fName"
          placeholder="ชื่อ"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          id="lName"
          name="lName"
          placeholder="นามสกุล"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          className="w100"
          type="password"
          id="password"
          name="password"
          placeholder="PASSWORD/รหัสผ่าน"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="w100"
          type="text"
          id="tel"
          name="tel"
          placeholder="หมายเลขโทรศัพท์"
          value={telephone}
          onChange={e => setTelephone(e.target.value)}
        />
        <input
          className="w100"
          type="text"
          id="userName"
          name="userName"
          placeholder="USERNAME/ชื่อบัญชีผู้ใช้"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="date"
          id="date"
          name="date"
          placeholder="วัน/เดือน/ปีเกิด"
          value={birthDate}
          onChange={e => setbirthDate(e.target.value)}
        />

        <div className="gender">
          <p>เพศ</p>
          <div>
            <input type="radio" id="Male" name="Male" value="Male" onChange={e => setGender(e.target.value)} />
            <label htmlFor="Male">ชาย</label>
          </div>
          <div>
            <input type="radio" id="Female" name="Female" value="Female" onChange={e => setGender(e.target.value)} />
            <label htmlFor="Female">หญิง</label>
          </div>
        </div>
      </div>
      <button onClick={handleSubmitSignUp}>สมัครสมาชิก & ลงชื่อเข้าใช้</button>
    </>
  );
}

export default SignupForm;
