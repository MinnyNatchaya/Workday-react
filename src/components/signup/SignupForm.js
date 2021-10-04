import { Link } from 'react-router-dom';
function SignupForm() {
  return (
    <section className="all_signup_user_page">
      <div className="container">
        <h2>สมัครง่าย และรวดเร็ว</h2>

        <div className="inputSignUpUser">
          <input type="text" id="fName" name="fName" placeholder="ชื่อ" />
          <input type="text" id="lName" name="lName" placeholder="นามสกุล" />
          <input className="w100" type="password" id="password" name="password" placeholder="PASSWORD/รหัสผ่าน" />
          <input className="w100" type="text" id="tel" name="tel" placeholder="หมายเลขโทรศัพท์" />
          <input className="w100" type="text" id="userName" name="userName" placeholder="USERNAME/ชื่อบัญชีผู้ใช้" />

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

export default SignupForm;
