import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className="user_profile_page">
      <div className="container">
        <div className="headerFix">
          <h2>PROFILE</h2>
        </div>

        <div className="bodyProfile">
          <div className="imgCrop">
            <img className="imgCropChild" src={require('../images/maid.png').default} alt="" />
          </div>

          <h3>USERNAME</h3>

          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>

          <p>(5 REVIEW)</p>
          <h3>ประวัติ</h3>
        </div>

        <div className="detailProfile">
          <div>
            <p>ชื่อ : MMMMMMM</p>
            <p>นามสกุล : MMMMMMM</p>
            <p>วันเกิด : 01/01/2020</p>
            <p>เพศ : AA</p>
          </div>

          <p>เบอร์ติดต่อ : 080-000-0000</p>
          <p>ที่อยู่ :</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit amet eius dolorem inventore fuga eaque
            temporibus error neque, iure quis a dolor delectus. Saepe reprehenderit nostrum nemo, a magnam aliquam.
          </p>
          <br />
          <div className="editProfile">
            <Link to="/profile-edit">
              <button className="btnEditProfile">แก้ไขประวัติ</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
