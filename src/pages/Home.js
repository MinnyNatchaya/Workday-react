import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="banner">
        <div className="container">
          <h1>บริการดูแลบ้านที่ดีที่สุด</h1>
          <h3>บริการเกี่ยวกับบ้านครบวงจร</h3>
          <h3>ที่เดียวครบจัดการได้ทุกปัญหาเรื่องบ้าน</h3>
          <Link to="/service">
            <button>จองบริการ</button>
          </Link>
        </div>
      </section>

      <section className="info">
        <div className="container">
          <h3>เริ่มจ้างบริการได้ด้วย 4 ขั้นตอนง่ายๆ</h3>

          <div className="boxes">
            <div>
              <img className="imginfo" src={require('../images/circle-all.png').default} alt="circle-all" />
              <p>เลือกประเภทงานที่ต้องการใช้บริการ</p>
              <img className="imgNum" src={require('../images/circle-1.png').default} alt="circle-1" />
            </div>

            <div>
              <img className="imginfo" src={require('../images/list.png').default} alt="list" />
              <p>กรอกข้อมูล รายละเอียดของปัญหาที่พบ</p>
              <img className="imgNum" src={require('../images/circle-2.png').default} alt="circle-2" />
            </div>

            <div>
              <img className="imginfo" src={require('../images/phone.png').default} alt="phone" />
              <p>ติดต่อ สอบถามรายละเอียดงาน และค่าบริการกับช่าง</p>
              <img className="imgNum" src={require('../images/circle-3.png').default} alt="circle-3" />
            </div>

            <div>
              <img className="imginfo" src={require('../images/star.png').default} alt="star" />
              <p>กดยืนยัน ORDER เมื่อการบริการจบลง</p>
              <img className="imgNum" src={require('../images/circle-4.png').default} alt="circle-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="review">
        <div className="container">
          <div className="comment">
            <i1 className="fas fa-quote-left"></i1>

            <div className="said">
              <h1>เสียงตอบรับจากผู้ใช้บริการ</h1>
              <h3>คุณภาพเกินราคา ช่างพดูจาสุภาพ เก่ง ทำงานเร็ว บริการประทับใจมากค่ะ</h3>
            </div>
            <i2 className="fas fa-quote-right"></i2>
          </div>
        </div>
      </section>

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
    </>
  );
}

export default Home;
