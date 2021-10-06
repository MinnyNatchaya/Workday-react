import { Link } from 'react-router-dom';

function OrdersWorkerForm() {
  return (
    <div className="boxYellow">
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
        <p>ผู้รับบริการ : MMMMMM MMMMMM</p>
        <p>เบอร์โทรติดต่อ : 080-000-0000</p>
        <div className="star">
          <pre>คะแนนรีวิว : </pre>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
          <i className="far fa-star"></i>
        </div>

        <p>ที่อยู่ :</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga blanditiis et! Optio est beatae,
          voluptates et ipsum quidem consequatur quaerat ipsam perferendis nobis. Natus saepe cupiditate alias ab illum!
        </p>
        <p>รายละเอียด :</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga blanditiis et! Optio est beatae,
          voluptates et ipsum quidem consequatur quaerat ipsam perferendis nobis. Natus saepe cupiditate alias ab illum!
        </p>
        <br />
        <div className="divBtnWorkerOrder">
          <button className="btnCancleWork">ยกเลิกงาน</button>
          <Link to="/profile-orders">
            <button className="btnFinishtWork">ทำรายการสำเร็จ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrdersWorkerForm;
