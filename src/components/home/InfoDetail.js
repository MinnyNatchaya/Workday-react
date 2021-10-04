function InfoDetail() {
  return (
    <section className="info">
      <div className="container">
        <h3>เริ่มจ้างบริการได้ด้วย 4 ขั้นตอนง่ายๆ</h3>

        <div className="boxes">
          <div>
            <img className="imginfo" src={require('../../images/circle-all.png').default} alt="circle-all" />
            <p>เลือกประเภทงานที่ต้องการใช้บริการ</p>
            <img className="imgNum" src={require('../../images/circle-1.png').default} alt="circle-1" />
          </div>

          <div>
            <img className="imginfo" src={require('../../images/list.png').default} alt="list" />
            <p>กรอกข้อมูล รายละเอียดของปัญหาที่พบ</p>
            <img className="imgNum" src={require('../../images/circle-2.png').default} alt="circle-2" />
          </div>

          <div>
            <img className="imginfo" src={require('../../images/phone.png').default} alt="phone" />
            <p>ติดต่อ สอบถามรายละเอียดงาน และค่าบริการกับช่าง</p>
            <img className="imgNum" src={require('../../images/circle-3.png').default} alt="circle-3" />
          </div>

          <div>
            <img className="imginfo" src={require('../../images/star.png').default} alt="star" />
            <p>กดยืนยัน ORDER เมื่อการบริการจบลง</p>
            <img className="imgNum" src={require('../../images/circle-4.png').default} alt="circle-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoDetail;
