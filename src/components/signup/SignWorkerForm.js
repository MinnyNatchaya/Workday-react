import { Link } from 'react-router-dom';

function SignWorkerForm() {
  return (
    <section className="all_signup_worker_page">
      <div className="container">
        <h2>ร่วมทำงานกับ WORKDAY</h2>

        <div className="inputSignUpWorker">
          <input type="text" id="fName" name="fName" placeholder="ชื่อ" />
          <input type="text" id="lName" name="lName" placeholder="นามสกุล" />
          <input type="password" id="password" name="password" placeholder="PASSWORD/รหัสผ่าน" />
          <input type="text" id="tel" name="tel" placeholder="หมายเลขโทรศัพท์" />
          <input type="text" id="userName" name="userName" placeholder="USERNAME/ชื่อบัญชีผู้ใช้" />

          <select id="city" name="city">
            <option value="จังหวัดที่สะดวกให้บริการ">จังหวัดที่สะดวกให้บริการ</option>
            <option value="กรุงเทพ">กรุงเทพ</option>
            <option value="นนทบุรี">นนทบุรี</option>
            <option value="ปทุมธานี">ปทุมธานี</option>
            <option value="นครปฐม">นครปฐม</option>
            <option value="สมุทรสาคร">สมุทรสาคร</option>
            <option value="สมุทรปราการ">สมุทรปราการ</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>

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

        <Link to="/">
          <button>สมัครสมาชิก & ลงชื่อเข้าใช้</button>
        </Link>
      </div>
    </section>
  );
}

export default SignWorkerForm;
