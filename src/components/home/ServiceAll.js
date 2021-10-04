import { Link } from 'react-router-dom';

function ServiceAll() {
  return (
    <section className="service">
      <div className="container">
        <Link to="/service-type">
          <div className="fixLight">
            <div className="box">
              <h1>งานไฟฟ้า</h1>
              <h3>เพิ่ม-ย้าย ปลั๊กไฟและสวิตซ์ไฟ ติดตั้งอุปกรณ์ แก้ไขปัญหาระบบไฟฟ้า </h3>
            </div>
          </div>
        </Link>

        <Link to="/service-type">
          <div className="fixWater">
            <div className="box">
              <h1>งานประปา</h1>
              <h3>ซ่อท่อน้ำรั่ว ซ่อมปั๊มน้ำ เปลี่ยนสุขภัณฑ์ งานรั่วซึึมอื่นๆ</h3>
            </div>
          </div>
        </Link>

        <Link to="/service-type">
          <div className="fixMaid">
            <div className="box">
              <h1>บริการแม่บ้าน</h1>
              <h3>ทำความสะอาดบ้าน คอนโด ล้างจาน ซักผ้า รีดผ้า ล้างห้องน้ำ</h3>
            </div>
          </div>
        </Link>

        <Link to="/service-type">
          <div className="fixBug">
            <div className="box">
              <h1>กำจัดแมลง</h1>
              <h3>กำจัดสิ่งรบกวน กำจัดปลวก หมัด มด ยุง ตัวเรือด แมลงสาบ </h3>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ServiceAll;
