function SeviceTypeWorker() {
  return (
    <section className="worker_service_fix_page">
      <div className="container">
        <div className="headerFix">
          <h2>งานไฟฟ้า</h2>
        </div>

        <div className="boxesList">
          <select className="listWorkType" id="workType" name="workType">
            <option value="ประเภทงาน">ประเภทงาน</option>
            <option value="สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ">สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ</option>
            <option value="หลอดไฟ">หลอดไฟ</option>
            <option value="เครื่องใช้ไฟฟ้า">เครื่องใช้ไฟฟ้า</option>
            <option value="บริการงานไฟฟ้าอื่นๆ">บริการงานไฟฟ้าอื่นๆ</option>
          </select>

          <select className="listCity" id="city" name="city">
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

        <div className="boxYellow">
          <div className="boxYellowup">
            <img src={require('../images/circle-fix.png').default} alt="" />
            <div className="fixDetail">
              <h3>ORDER : </h3>
              <p>ประเภทงาน</p>
              <p>วันที่ : </p>
            </div>
            <div className="btn">
              <a href="./worker_order.html">
                <button className="btnAcceptWork">รับงาน</button>
              </a>
            </div>
          </div>

          <hr />

          <div className="boxYellowDown">
            <p>ผู้รับบริการ : MMMMMM MMMMMM</p>

            <div className="star">
              <pre>คะแนนรีวิว : </pre>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
            </div>

            <p>ที่อยู่ : </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga blanditiis et! Optio est beatae,
              voluptates et ipsum quidem consequatur quaerat ipsam perferendis nobis. Natus saepe cupiditate alias ab
              illum!
            </p>
            <p>รายละเอียด :</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga blanditiis et! Optio est beatae,
              voluptates et ipsum quidem consequatur quaerat ipsam perferendis nobis. Natus saepe cupiditate alias ab
              illum!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeviceTypeWorker;
