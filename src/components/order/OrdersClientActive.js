import { Link } from 'react-router-dom';

function OrdersClientActive() {
  return (
    <div className="boxYellowWithWorker">
      <div className="boxYellowup">
        <img src={require('../../images/circle-fix.png').default} alt="" />

        <div className="fixDetail">
          <h3>ORDER :</h3>
          <p>ประเภทงาน</p>
          <p>วันที่ :</p>
        </div>
      </div>

      <hr />

      <div className="boxYellowDown">
        <div className="boxYellowDownDetail">
          <div className="boxYellowDownL">
            <p>ผู้ให้บริการ : MMMMMM MMMMMM</p>
            <p>เบอร์โทรติดต่อ : 080-000-0000</p>
            <div className="star">
              <pre>คะแนนรีวิว : </pre>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i>
            </div>
          </div>

          <button className="btnChangeWorker">เปลี่ยนช่าง</button>
        </div>

        <button className="btnUpSlip">อัพโหลดหลักฐานการชำระเงิน</button>
        <Link to="/profile-orders">
          <button className="btnFinishtWork">ทำรายการสำเร็จ</button>
        </Link>
      </div>
    </div>
  );
}

export default OrdersClientActive;
