import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';

function SignupForm({ signupPage }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [telephone, setTelephone] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState({});

  const history = useHistory();

  const handleSubmitSignUp = async e => {
    e.preventDefault();

    let isError = false;

    try {
      if (firstName.trim() === '') {
        setError(currErr => ({ ...currErr, firstName: '**Please enter your first name' }));
        isError = true;
      }

      if (lastName.trim() === '') {
        setError(currErr => ({ ...currErr, lastName: '**Please enter your last name' }));
        isError = true;
      }

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

      if (birthDate.trim() === '') {
        setError(currErr => ({ ...currErr, birthDate: '**Please choose your birth date' }));
        isError = true;
      }

      if (telephone.trim() === '') {
        setError(currErr => ({ ...currErr, telephone: '**Please enter your telephone' }));
        isError = true;
      }

      if (gender.trim() === '') {
        setError(currErr => ({ ...currErr, gender: '**Please choose your gender' }));
        isError = true;
      }

      if (!isError) {
        await axios.post(signupPage === 'worker' ? '/signup-worker' : '/signup', {
          firstName,
          lastName,
          username,
          password,
          birthDate,
          telephone,
          gender
        });
        history.push({
          pathname: '/login',
          state: { message: 'Your account has been created' }
        });
      }
    } catch (err) {
      // console.dir(err);
      // console.log(err.response.data.message);
      setError(currErr => ({ ...currErr, username: err.response.data.message }));
      setUsername('');
    }
  };

  return (
    <>
      <div className="inputSignUpUser">
        <input
          type="text"
          id="fName"
          name="fName"
          className={error.firstName ? 'errorMessage' : 'normalMessage'}
          placeholder={error.firstName ? error.firstName : 'ชื่อ'}
          value={firstName}
          onChange={e => {
            setError(curr => ({ ...curr, firstName: '' }));
            setFirstName(e.target.value);
          }}
        />

        <input
          type="text"
          id="lName"
          name="lName"
          className={error.lastName ? 'errorMessage' : 'normalMessage'}
          placeholder={error.lastName ? error.lastName : 'นามสกุล'}
          value={lastName}
          onChange={e => {
            setError(curr => ({ ...curr, lastName: '' }));
            setLastName(e.target.value);
          }}
        />
        <input
          type="password"
          id="password"
          name="password"
          className={`w100 ${error.password ? 'w100 errorMessage' : 'normalMessage'}`}
          placeholder={error.password ? error.password : 'PASSWORD/รหัสผ่าน'}
          value={password}
          onChange={e => {
            setError(curr => ({ ...curr, psaaword: '' }));
            setPassword(e.target.value);
          }}
        />
        <input
          type="text"
          id="tel"
          name="tel"
          className={`w100 ${error.telephone ? 'w100 errorMessage' : 'normalMessage'}`}
          placeholder={error.telephone ? error.telephone : 'หมายเลขโทรศัพท์'}
          value={telephone}
          onChange={e => {
            setError(curr => ({ ...curr, telephone: '' }));
            setTelephone(e.target.value);
          }}
        />
        <input
          type="text"
          id="userName"
          name="userName"
          className={`w100 ${error.username ? 'w100 errorMessage' : 'normalMessage'}`}
          placeholder={error.username ? error.username : 'USERNAME/ชื่อบัญชีผู้ใช้'}
          value={username}
          onChange={e => {
            setError(curr => ({ ...curr, username: '' }));
            setUsername(e.target.value);
          }}
        />

        <div className="inputDate">
          <div>
            <p>วันเกิด: </p>
            <input
              type="date"
              id="date"
              name="date"
              className={error.birthDate ? 'errorMessage' : 'normalMessage'}
              value={birthDate}
              onChange={e => {
                setError(curr => ({ ...curr, birthDate: '' }));
                setbirthDate(e.target.value);
              }}
            />
          </div>
          {error.birthDate && <span className="errorMessage">{error.birthDate}</span>}
        </div>

        <div className="inputGender">
          <div className="gender">
            <p>เพศ</p>
            <div>
              <input
                type="radio"
                id="Male"
                name="Male"
                value="Male"
                checked={gender === 'Male'}
                onChange={e => {
                  setError(curr => ({ ...curr, gender: '' }));
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="Male">ชาย</label>
            </div>
            <div>
              <input
                type="radio"
                id="Female"
                name="Female"
                value="Female"
                checked={gender === 'Female'}
                onChange={e => {
                  setError(curr => ({ ...curr, gender: '' }));
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="Female">หญิง</label>
            </div>
          </div>
          {error.gender && <span className="errorMessage">{error.gender}</span>}
        </div>
      </div>

      <button onClick={handleSubmitSignUp}>สมัครสมาชิก</button>
    </>
  );
}

export default SignupForm;
