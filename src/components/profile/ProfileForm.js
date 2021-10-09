import { Link } from 'react-router-dom';

function ProfileForm() {
  return (
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
        <Link to="/profile/edit">
          <button className="btnEditProfile">แก้ไขประวัติ</button>
        </Link>
      </div>
    </div>
  );
}

export default ProfileForm;
