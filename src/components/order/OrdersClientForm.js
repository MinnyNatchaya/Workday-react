import axios from '../../config/axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import { SocketContext } from '../../contexts/socketContext';
import Swal from 'sweetalert2';

function OrdersClientForm() {
  const { setIsUpSlip, isFinishWork } = useContext(UserContext);

  const [orders, setOrders] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [slipUrl, setSlipUrl] = useState('');
  const [previewSlipUrl, setPreviewSlipUrl] = useState('');
  const [error, setError] = useState({});

  const history = useHistory();

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (socket !== '') {
      socket.on('receive_workerAcceptWork', () => {
        window.location.reload();
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket !== '') {
      socket.on('receive_workerCancleWork', () => {
        window.location.reload();
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket !== '') {
      socket.on('receive_workerCancleSlip', () => {
        window.location.reload();
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket !== '') {
      socket.on('receive_workerAcceptSlip', () => {
        window.location.reload();
      });
    }
  }, [socket]);

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
  }, [toggle, isFinishWork]);

  const handleClickDelete = async (e, id) => {
    try {
      await axios.delete(`/order/${id}`);
      setToggle(curr => !curr);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickChangeWorker = async (e, id, workerId) => {
    try {
      await axios.put(`/order/changeWorker/${id}`);

      const messageData = {
        workerId: workerId,
        message: 'reload'
      };
      socket.emit('changeWorker', messageData);

      setToggle(curr => !curr);
    } catch (err) {
      console.dir(err);
    }
  };

  const hiddenFileInput = React.useRef(null);

  const handleClickUploadImg = e => {
    hiddenFileInput.current.click();
  };

  const handleChangeUploadImg = e => {
    setError('');
    setSlipUrl(e.target.files[0]);
    // console.dir(slipUrl);
    setPreviewSlipUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleClickUploadSlip = async (e, id, workerId) => {
    let isError = false;
    try {
      if (previewSlipUrl.trim() === '') {
        setError(currErr => ({ ...currErr, slipUrl: '*Please upload slip*' }));
        isError = true;
      }
      if (!isError) {
        const formData = new FormData();
        formData.append('slipUrl', slipUrl);
        await axios.put(`/order/uploadSlip/${id}`, formData);

        // alert('Upload slip success');
        Swal.fire({
          icon: 'success',
          title: 'Upload slip success',
          showConfirmButton: false,
          timer: 1500
        });

        const messageData = {
          workerId: workerId,
          message: 'reload'
        };
        socket.emit('clientUploadSlip', messageData);

        setIsUpSlip(curr => !curr);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      {orders &&
        orders.map(item => (
          <>
            {!item.status && (
              <>
                {!item.workerId && (
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
                )}

                {item.workerId && (
                  <div className="boxYellowWithWorker">
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
                      <div className="boxYellowDownDetail">
                        <div className="boxYellowDownL">
                          <p>ผู้บริการ : {item.worker.username}</p>
                          <p>เบอร์โทรติดต่อ : {item.worker.telephone}</p>
                          <div className="star">
                            <pre>คะแนนรีวิว : {item.worker.rate} </pre>
                            <i className="fas fa-star"></i>
                            <pre> ( {item.worker.review} review )</pre>
                            {/* <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i> */}
                          </div>
                        </div>

                        <button
                          className="btnChangeWorker"
                          onClick={e => handleClickChangeWorker(e, item.id, item.workerId)}
                        >
                          เปลี่ยนช่าง
                        </button>
                      </div>

                      {previewSlipUrl && (
                        <>
                          <div className="imgSlipUpload">
                            <img className="imgSlipUploadCrop" src={previewSlipUrl} alt="" />
                          </div>
                          <button
                            className="btnFinishtWork"
                            onClick={e => handleClickUploadSlip(e, item.id, item.workerId)}
                          >
                            ยืนยัน
                          </button>
                        </>
                      )}

                      {!previewSlipUrl && (
                        <>
                          {error.slipUrl && <p className="errorMessage">{error.slipUrl}</p>}
                          <button className="btnUpSlip" onClick={handleClickUploadImg}>
                            อัพโหลดหลักฐานการชำระเงิน
                          </button>
                          <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChangeUploadImg}
                            style={{ display: 'none' }}
                          />
                        </>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        ))}
    </>
  );
}

export default OrdersClientForm;
