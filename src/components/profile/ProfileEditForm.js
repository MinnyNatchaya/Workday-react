import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileEditForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');

  return (
    <div className="editDetailProfile">
      <div className="editProfileInput">
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
        <textarea
          name="address"
          id="address"
          cols="100"
          rows="3"
          value={address}
          onChange={e => setAddress(e.target.value)}
        >
          ที่อยู่
        </textarea>

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
            <input type="radio" id="male" name="male" value="Male" onChange={e => setGender(e.target.value)} />
            <label htmlFor="male">ชาย</label>
          </div>
          <div>
            <input type="radio" id="woman" name="woman" value="Female" onChange={e => setGender(e.target.value)} />
            <label htmlFor="woman">หญิง</label>
          </div>
        </div>
      </div>

      <div className="btnProfile">
        <Link to="/profile">
          <button className="btnCancleProfile">ยกเลิก</button>
        </Link>
        <Link to="/profile">
          <button className="btnAcceptProfile">ยืนยัน</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileEditForm;
