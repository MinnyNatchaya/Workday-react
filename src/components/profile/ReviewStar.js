import { useContext, useEffect, useState } from 'react';
import '../../AppReview.css';
import axios from '../../config/axios';
import { UserContext } from '../../contexts/userContext';
import Swal from 'sweetalert2';
import ReviewStarItem from './ReviewStarItem';

function ReviewStar() {
  const { role } = useContext(UserContext);

  const [orders, setOrders] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const callOrders = async () => {
      await axios
        .get(role === 'client' ? '/order' : '/service-type-worker')
        .then(res => {
          setOrders(res.data.orders);
        })
        .catch(err => {
          console.dir(err);
        });
    };
    callOrders();
  }, [toggle]);

  return (
    <>
      <h3 className="reviewHeadText">ให้คะแนนบริการ</h3>

      {orders.map(item => (
        <ReviewStarItem item={item} setToggle={setToggle} />
      ))}
    </>
  );
}

export default ReviewStar;
