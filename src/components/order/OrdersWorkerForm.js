import { Link, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import Slip from './Slip';
import { UserContext } from '../../contexts/userContext';
import Swal from 'sweetalert2';
import { SocketContext } from '../../contexts/socketContext';

function OrdersWorkerForm() {
  const { isUpSlip, isFinishWork, setIsFinishWork } = useContext(UserContext);
  const { socket } = useContext(SocketContext);

  const [orders, setOrders] = useState([]);
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (socket !== '') {
      socket.on('receive_changeWorker', () => {
        window.location.reload();
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket !== '') {
      socket.on('receive_clientUploadSlip', () => {
        window.location.reload();
      });
    }
  }, [socket]);

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
  }, [toggle, isUpSlip, isFinishWork]);

  const handleClickCancleWork = async (e, id, clientId) => {
    try {
      await axios.put(`/service-type-worker/cancle/${id}`);

      const messageData = {
        clientId: clientId,
        message: 'reload'
      };
      socket.emit('workerCancleWork', messageData);

      setToggle(curr => !curr);
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickCancleSlip = async (e, id, clientId) => {
    try {
      await axios.put(`/service-type-worker/cancleSlip/${id}`);

      const messageData = {
        clientId: clientId,
        message: 'reload'
      };
      socket.emit('workerCancleSlip', messageData);

      setToggle(curr => !curr);
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickFinishWork = async (e, id, clientId) => {
    try {
      await axios.put(`/service-type-worker/finishWork/${id}`);
      Swal.fire({
        icon: 'success',
        title: 'Finish work!',
        showConfirmButton: false,
        timer: 1500
      });

      const messageData = {
        clientId: clientId,
        message: 'reload'
      };
      socket.emit('workerAcceptSlip', messageData);

      setIsFinishWork(curr => !curr);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <div className="headerFix">
        <h2>MY ORDER</h2>
      </div>

      {orders &&
        orders.map(item => (
          <>
            {!item.status && (
              <>
                {item.slipUrl && (
                  <div className="slipPopup">
                    {/* <i className="fas fa-times iconX"></i> */}

                    <h2>ยืนยันรายการรับเงิน</h2>

                    <div className="imgSlipCrop">
                      <img className="imgSlipCropChild" src={item.slipUrl} alt="" />
                    </div>

                    <div className="btnSlipPopup">
                      <button className="btnCancleSlip" onClick={e => handleClickCancleSlip(e, item.id, item.clientId)}>
                        ยกเลิก
                      </button>
                      <button className="btnAcceptSlip" onClick={e => handleClickFinishWork(e, item.id, item.clientId)}>
                        ตกลง
                      </button>
                    </div>
                  </div>
                )}

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
                      <pre> ( {item.client.review} review ) </pre>
                      {/* <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <i className="far fa-star"></i> */}
                    </div>

                    <p>ที่อยู่ :</p>
                    <p>{item.address}</p>
                    <p>รายละเอียด :</p>
                    <p>{item.detail}</p>
                    <br />
                    <div className="divBtnWorkerOrder">
                      <button className="btnCancleWork" onClick={e => handleClickCancleWork(e, item.id, item.clientId)}>
                        ยกเลิกงาน
                      </button>

                      {/* {item.slipUrl && (
                        <Link to="/profile-orders">
                          <button className="btnFinishtWork">ทำรายการสำเร็จ</button>
                        </Link>
                      )} */}
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ))}
    </>
  );
}

export default OrdersWorkerForm;
