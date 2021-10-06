import { Link } from 'react-router-dom';

function CreateOrderForm() {
  return (
    <section className="all_signup_user_page">
      <div className="container">
        <h2>ข้อมูลติดต่อ</h2>

        <div className="inputSignUpUser">
          <input className="w100" type="text" id="tel" name="tel" placeholder="หมายเลขโทรศัพท์" />
          <textarea name="address" id="address" cols="100" rows="3">
            ที่อยู่
          </textarea>
          <textarea name="detailsWork" id="detailsWork" cols="100" rows="3">
            รายละเอียดงาน
          </textarea>
          <input type="date" id="date" name="date" placeholder="วันที่ใช้บริการ" />

          <select id="city" name="city">
            <option value="จังหวัด">จังหวัด</option>
            <option value="กรุงเทพ">กรุงเทพ</option>
            <option value="นนทบุรี">นนทบุรี</option>
            <option value="ปทุมธานี">ปทุมธานี</option>
            <option value="นครปฐม">นครปฐม</option>
            <option value="สมุทรสาคร">สมุทรสาคร</option>
            <option value="สมุทรปราการ">สมุทรปราการ</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>

        <div className="user_crateList_page_btn">
          <div>
            <Link to="/service">
              <button className="btncancle">ยกเลิก</button>
            </Link>

            <Link to="/create-order">
              <button className="btnclear">ล้างข้อมูล</button>
            </Link>
          </div>
          <div className="divBtnOrder">
            <Link to="/profile-orders">
              <button>ยืนยัน ORDER</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateOrderForm;
