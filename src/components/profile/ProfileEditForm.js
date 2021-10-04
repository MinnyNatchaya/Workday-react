import { Link } from 'react-router-dom';

function ProfileEditForm() {
  return (
    <div className="editDetailProfile">
      <div className="editProfileInput">
        <input type="text" id="fName" name="fName" placeholder="ชื่อ" />
        <input type="text" id="lName" name="lName" placeholder="นามสกุล" />
        <input className="w100" type="password" id="password" name="password" placeholder="PASSWORD/รหัสผ่าน" />
        <input className="w100" type="text" id="tel" name="tel" placeholder="หมายเลขโทรศัพท์" />
        <input className="w100" type="text" id="userName" name="userName" placeholder="USERNAME/ชื่อบัญชีผู้ใช้" />
        <textarea name="address" id="address" cols="100" rows="3">
          ที่อยู่
        </textarea>

        <input type="date" id="date" name="date" placeholder="วัน/เดือน/ปีเกิด" />

        <div className="gender">
          <p>เพศ</p>
          <div>
            <input type="radio" id="male" name="male" />
            <label for="male">ชาย</label>
          </div>
          <div>
            <input type="radio" id="woman" name="woman" />
            <label for="woman">หญิง</label>
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
