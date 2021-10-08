import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function ServiceCategory() {
  const { role, setChooseCategory } = useContext(UserContext);

  return (
    <>
      <section className="service_page_fix">
        <div className="container">
          <div>
            <h1>งานไฟฟ้า</h1>
            <h3>เพิ่ม-ย้าย ปลั๊กไฟและสวิตซ์ไฟ ติดตั้งอุปกรณ์ แก้ไขปัญหาระบบไฟฟ้า</h3>
            <Link to="/service-type?subType=fix">
              <button onClick={() => setChooseCategory({ name: 'งานไฟฟ้า', id })}>
                {role === 'client' ? 'จองบริการ >' : 'ORDER >'}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="service_page_water">
        <div className="container">
          <div>
            <h1>งานประปา</h1>
            <h3>ซ่อท่อน้ำรั่ว ซ่อมปั๊มน้ำ เปลี่ยนสุขภัณฑ์ งานรั่วซึึมอื่นๆ</h3>
            <Link to="/service-type?subType=water">
              <button onClick={() => setChooseCategory('งานประปา')}>
                {role === 'client' ? 'จองบริการ >' : 'ORDER >'}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="service_page_maid">
        <div className="container">
          <div>
            <h1>บริการแม่บ้าน</h1>
            <h3>ทำความสะอาดบ้าน คอนโด ล้างจาน ซักผ้า รีดผ้า ล้างห้องน้ำ</h3>
            <Link to="/service-type?subType=maid">
              <button onClick={() => setChooseCategory('บริการแม่บ้าน')}>
                {role === 'client' ? 'จองบริการ >' : 'ORDER >'}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="service_page_bug">
        <div className="container">
          <div>
            <h1>กำจัดแมลง</h1>
            <h3>กำจัดสิ่งรบกวน กำจัดแมลง กำจัดปลวก หมัด มด ยุง ตัวเรือด แมลงสาบ</h3>
            <Link to="/service-type?subType=bug">
              <button onClick={() => setChooseCategory('กำจัดแมลง')}>
                {role === 'client' ? 'จองบริการ >' : 'ORDER >'}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceCategory;
