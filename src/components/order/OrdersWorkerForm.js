import { Link, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

function OrdersWorkerForm() {
  const [orders, setOrders] = useState([]);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const callOrders = async () => {
      await axios
        .get('/service-type-worker')
        .then(res => {
          // console.dir(res.data);
          setOrders(res.data.orders);
        })
        .catch(err => {
          console.log(err);
        });
    };
    callOrders();
  }, [toggle]);

  const handleClickCancleWork = async (e, id) => {
    try {
      await axios.put(`/service-type-worker/cancle/${id}`);
      setToggle(curr => !curr);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      {orders &&
        orders.map(item => (
          <div className="boxYellow">
            <div className="boxYellowup">
              <img src={item.SubCategory.Category.logoUrl} alt="" />
              <div className="fixDetail">
                <h3>{item.SubCategory.Category.name}</h3>
                <p>{item.SubCategory.name}</p>
                <p>วันที่ : {item.date}</p>
              </div>
            </div>

            <hr />

            <div className="boxYellowDown">
              <p>ผู้รับบริการ : {item.client.username}</p>
              <p>เบอร์โทรติดต่อ : {item.client.telephone} </p>
              <div className="star">
                <pre>คะแนนรีวิว : {item.client.rate} </pre>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>

              <p>ที่อยู่ :</p>
              <p>{item.address}</p>
              <p>รายละเอียด :</p>
              <p>{item.detail}</p>
              <br />
              <div className="divBtnWorkerOrder">
                <button className="btnCancleWork" onClick={e => handleClickCancleWork(e, item.id)}>
                  ยกเลิกงาน
                </button>
                <Link to="/profile-orders">
                  <button className="btnFinishtWork">ทำรายการสำเร็จ</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default OrdersWorkerForm;
