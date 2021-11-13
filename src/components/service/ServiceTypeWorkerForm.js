import { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import { SocketContext } from '../../contexts/socketContext';

function ServiceTypeWorkerForm({ filterCity }) {
  console.dir(filterCity);
  const param = useParams();
  const [orderItem, setOrderItem] = useState([]);
  const history = useHistory();

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (socket !== '') {
      socket.on('receive_changeWorker', () => {
        window.location.reload();
      });
    }
  }, [socket]);

  useEffect(() => {
    const callOrders = async () => {
      await axios
        .get(`/service-type-worker/category/${param.categoryId}`)
        .then(res => {
          setOrderItem(res.data.orders);
        })
        .catch(err => {
          console.log(err);
        });
    };
    callOrders();
  }, []);

  const handleClickAcceptWork = async (e, id, clientId) => {
    // console.dir(id);
    try {
      await axios.put(`/service-type-worker/acceptwork/${id}`);

      const messageData = {
        clientId: clientId,
        message: 'reload'
      };

      socket.emit('workerAcceptWork', messageData);

      history.push({
        pathname: '/profile/orders',
        state: { message: 'Your order has been updated' }
      });
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      {filterCity.map(item => (
        <>
          {!item.workerId && (
            <div className="boxYellow">
              <div className="boxYellowup">
                <img src={item.SubCategory.Category.logoUrl} alt="" />
                <div className="fixDetail">
                  <h3>{item.SubCategory.Category.name}</h3>
                  <p>{item.SubCategory.name}</p>
                  <p>วันที่ : {item.date}</p>
                </div>
                <div className="btn">
                  <a>
                    <button className="btnAcceptWork" onClick={e => handleClickAcceptWork(e, item.id, item.clientId)}>
                      รับงาน
                    </button>
                  </a>
                </div>
              </div>

              <hr />

              <div className="boxYellowDown">
                <p>ผู้รับบริการ : {item.client.username}</p>

                <div className="star">
                  <pre>คะแนนรีวิว : {item.client.rate} </pre>
                  <i className="fas fa-star"></i>
                  <pre> ( {item.client.review} review )</pre>
                  {/* <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="far fa-star"></i> */}
                </div>

                <p>ที่อยู่ : </p>
                <p>{item.address}</p>
                <p>รายละเอียด :</p>
                <p>{item.detail}</p>
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default ServiceTypeWorkerForm;
