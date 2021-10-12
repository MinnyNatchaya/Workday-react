import axios from '../../config/axios';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function OrdersClientForm() {
  const [orders, setOrders] = useState([]);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const callOrders = async () => {
      await axios
        .get('/order')
        .then(res => {
          setOrders(res.data.orders);
        })
        .catch(err => {
          console.log(err);
        });
    };
    callOrders();
  }, [toggle]);

  const handleClickDelete = async (e, id) => {
    try {
      await axios.delete(`/order/${id}`).then(setToggle(curr => !curr));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {orders &&
        orders.map(item => (
          <div className="boxYellow">
            <img src={item.SubCategory.Category.logoUrl} alt="" />
            <div className="fixDetail">
              <h3>{item.SubCategory.Category.name}</h3>
              <p>{item.SubCategory.name}</p>
              <p>วันที่ : {item.date}</p>
            </div>
            <div className="btn">
              <a>
                <button className="btnedit" onClick={() => history.push(`/order/edit/${item.id}`)}>
                  แก้ไข
                </button>
              </a>

              <button className="btncancleMyOrder" onClick={e => handleClickDelete(e, item.id)}>
                ยกเลิก
              </button>
            </div>
          </div>
        ))}
    </>
  );
}

export default OrdersClientForm;
