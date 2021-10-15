import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProfileForm() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const callProfile = async () => {
      await axios
        .get('/profile')
        .then(res => {
          setProfile(res.data.user);
        })
        .catch(err => {
          console.log(err);
        });
    };
    callProfile();
  }, []);

  return (
    <>
      {profile.map(item => (
        <>
          <div className="bodyProfile">
            <div className="imgCrop">
              <img
                className="imgCropChild"
                src={
                  item.imgUrl
                    ? item.imgUrl
                    : 'https://res.cloudinary.com/dl7u9oybl/image/upload/v1633073970/l6y8yhzctblrttmt2xpp.png'
                }
                alt=""
              />
            </div>

            <h3>{item.username}</h3>

            <div className="star">
              <h1>{item.rate.toFixed(1)}</h1>
              <p>/5.0</p>
              <i className="fas fa-star"></i>
              {/* <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i> */}
            </div>

            <p>( {item.review} review )</p>
            <h3>ประวัติ</h3>
          </div>

          <div className="detailProfile">
            <div>
              <p>ชื่อ : {item.lastName}</p>
              <p>นามสกุล : {item.firstName}</p>
              <p>วันเกิด : {item.birthDate}</p>
              <p>เพศ : {item.gender}</p>
            </div>

            <p>เบอร์ติดต่อ : {item.telephone}</p>
            <p>ที่อยู่ :</p>
            <p>{item.address} </p>
            <br />
            <div className="editProfile">
              <Link to="/profile/edit">
                <button className="btnEditProfile">แก้ไขประวัติ</button>
              </Link>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default ProfileForm;
