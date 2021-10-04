import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <section className="all_login_page">
      <div className="container">
        <div className="container1">
          <h1>WORKDAY</h1>
          <h3>เรื่องบ้าน เรื่องง่าย ครบจบในที่เดียว</h3>
        </div>

        <div className="container2">
          <h2>เข้าสู่ระบบ</h2>

          <div className="inputLogin">
            <input type="text" id="userName" name="userName" placeholder="USERNAME/ชื่อบัญชีผู้ใช้" />
            <input type="password" id="password" name="password" placeholder="PASSWORD/รหัสผ่าน" />
          </div>

          <div className="btn">
            <Link to="/">
              <button className="btnSignin">ลงชื่อเข้าใช้</button>
            </Link>
            <Link to="/signup">
              <button className="btnSignUp">สมัครสมาชิก</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
