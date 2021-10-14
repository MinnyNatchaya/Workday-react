import axios from '../../config/axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function ProfileEditForm() {
  // const [profile, setProfile] = useState([]);
  const history = useHistory();
  const [previewImgUrl, setPreviewImgUrl] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [rate, setRate] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    const callProfile = async () => {
      await axios
        .get('/profile')
        .then(res => {
          // setProfile(res.data.user);
          setFirstName(res.data.user[0].firstName);
          setLastName(res.data.user[0].lastName);
          setUsername(res.data.user[0].firstName);
          // setPassword(res.data.user[0].username);
          setRate(res.data.user[0].rate);
          setbirthDate(res.data.user[0].birthDate);
          setTelephone(res.data.user[0].telephone);
          // setAddress(res.data.user[0].address);
          setGender(res.data.user[0].gender);
          setImgUrl(res.data.user[0].imgUrl);
        })
        .catch(err => {
          console.dir(err);
        });
    };
    callProfile();
  }, []);

  const hiddenFileInput = React.useRef(null);

  const handleClickUploadImg = e => {
    hiddenFileInput.current.click();
  };

  const handleChangeUploadImg = e => {
    setImgUrl(e.target.files[0]);
    setPreviewImgUrl(URL.createObjectURL(e.target.files[0]));
    //URL.createObjectURL คือ preview รูป
  };

  const handleSubmitEditProfile = async e => {
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
        setError(currErr => ({ ...currErr, password: '**Password validation is at least 6 character' }));
        isError = true;
      }

      if (birthDate.trim() === '') {
        setError(currErr => ({ ...currErr, birthDate: '**Please enter your birth date' }));
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
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('birthDate', birthDate);
        formData.append('telephone', telephone);
        formData.append('address', address);
        formData.append('gender', gender);

        if (previewImgUrl) {
          formData.append('imgUrl', imgUrl);
        }
        await axios.put('/profile/edit', formData);

        history.push({
          pathname: '/profile',
          state: { message: 'Your account has been updated' }
        });
      }
    } catch (err) {
      setError(currErr => ({ ...currErr, username: err.response.data.message }));
      console.dir(err);
    }
  };

  return (
    <>
      <div className="bodyProfile">
        <div className="imgCrop">
          <button onClick={handleClickUploadImg}>
            <img className="imgChangeimg" src={require('../../images/upload.png').default} alt="" />
          </button>
          <input type="file" ref={hiddenFileInput} onChange={handleChangeUploadImg} style={{ display: 'none' }} />
          <img className="imgCropChild" src={previewImgUrl ? previewImgUrl : imgUrl} alt="" />
        </div>

        <h3>{username}</h3>

        <h3>ประวัติ</h3>
      </div>

      <div className="editDetailProfile">
        <div className="editProfileInput">
          <p>ชื่อ: </p>
          {error.firstName && <p className="errorMessage">{error.firstName}</p>}
          <input
            className="w100"
            type="text"
            id="fName"
            name="fName"
            placeholder="ชื่อ"
            value={firstName}
            onChange={e => {
              setError(curr => ({ ...curr, firstName: '' }));
              setFirstName(e.target.value);
            }}
          />

          <p>นามสกุล: </p>
          {error.lastName && <p className="errorMessage">{error.lastName}</p>}
          <input
            className="w100"
            type="text"
            id="lName"
            name="lName"
            placeholder="นามสกุล"
            value={lastName}
            onChange={e => {
              setError(curr => ({ ...curr, lastName: '' }));
              setLastName(e.target.value);
            }}
          />

          <p>รหัสผ่าน: </p>
          {error.password && <p className="errorMessage">{error.password}</p>}
          <input
            className="w100"
            type="password"
            id="password"
            name="password"
            placeholder="PASSWORD/รหัสผ่าน"
            value={password}
            onChange={e => {
              setError(curr => ({ ...curr, password: '' }));
              setPassword(e.target.value);
            }}
          />

          <p>หมายเลขโทรศัพท์: </p>
          {error.telephone && <p className="errorMessage">{error.telephone}</p>}
          <input
            readOnly={false}
            className="w100"
            type="text"
            id="tel"
            name="tel"
            placeholder="หมายเลขโทรศัพท์"
            value={telephone}
            onChange={e => {
              setTelephone(e.target.value);
            }}
          />

          <p>USERNAME/ชื่อบัญชีผู้ใช้: </p>
          {error.username && <p className="w100 errorMessage">{error.username}</p>}
          <input
            className="w100"
            type="text"
            id="userName"
            name="userName"
            placeholder="USERNAME/ชื่อบัญชีผู้ใช้"
            value={username}
            onChange={e => {
              setError(curr => ({ ...curr, username: '' }));
              setUsername(e.target.value);
            }}
          />

          <p>ที่อยู่: </p>
          {error.address && <p className="errorMessage">{error.address}</p>}
          <textarea
            name="address"
            id="address"
            cols="100"
            rows="3"
            value={address}
            onChange={e => {
              setAddress(e.target.value);
            }}
          />

          <p>วัน/เดือน/ปีเกิด: </p>
          {error.birthDate && <p className="errorMessage">{error.birthDate}</p>}
          <input
            className="w100"
            type="date"
            id="date"
            name="date"
            placeholder="วัน/เดือน/ปีเกิด"
            value={birthDate}
            onChange={e => {
              setbirthDate(e.target.value);
            }}
          />

          <div className="gender w100">
            <p>เพศ: </p>

            <div>
              <input
                checked={gender === 'Male'}
                type="radio"
                id="male"
                name="male"
                value="Male"
                onChange={e => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="male">ชาย</label>
            </div>
            <div>
              <input
                checked={gender === 'Female'}
                type="radio"
                id="woman"
                name="woman"
                value="Female"
                onChange={e => {
                  setGender(e.target.value);
                }}
              />
              <label htmlFor="woman">หญิง</label>
            </div>
          </div>
          {error.gender && <p className="errorMessage">{error.gender}</p>}
        </div>

        <div className="btnProfile">
          <Link to="/profile">
            <button className="btnCancleProfile">ยกเลิก</button>
          </Link>

          <button className="btnAcceptProfile" onClick={handleSubmitEditProfile}>
            ยืนยัน
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfileEditForm;
