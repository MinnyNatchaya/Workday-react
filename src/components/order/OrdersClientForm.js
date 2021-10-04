import { Link } from 'react-router-dom';

function OrdersClientForm() {
  return (
    <div className="boxYellow">
      <img src={require('../../images/circle-fix.png').default} alt="" />
      <div className="fixDetail">
        <h3>ORDER : </h3>
        <p>ประเภทงาน</p>
        <p>วันที่ : </p>
      </div>
      <div className="btn">
        <Link to="/create-order">
          <button className="btnedit">แก้ไข</button>
        </Link>

        <button className="btncancleMyOrder">ยกเลิก</button>
      </div>
    </div>
  );
}

export default OrdersClientForm;
