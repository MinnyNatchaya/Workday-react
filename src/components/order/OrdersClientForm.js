import axios from '../../config/axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function OrdersClientForm() {
  const { setIsUpSlip, isFinishWork } = useContext(UserContext);

  const [orders, setOrders] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [slipUrl, setSlipUrl] = useState('');
  const [previewSlipUrl, setPreviewSlipUrl] = useState('');
  const [error, setError] = useState({});

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
  }, [toggle, isFinishWork]);

  const handleClickDelete = async (e, id) => {
    try {
      await axios.delete(`/order/${id}`);
      alert('Upload success!');
      setToggle(curr => !curr);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickChangeWorker = async (e, id) => {
    try {
      await axios.put(`/order/changeWorker/${id}`);
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

  const handleClickUploadSlip = async (e, id) => {
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
        alert('Upload slip success');
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
                            {/* <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        <i className="far fa-star"></i> */}
                          </div>
                        </div>

                        <button className="btnChangeWorker" onClick={e => handleClickChangeWorker(e, item.id)}>
                          เปลี่ยนช่าง
                        </button>
                      </div>

                      {previewSlipUrl && (
                        <div className="imgSlipUpload">
                          <img className="imgSlipUploadCrop" src={previewSlipUrl} alt="" />
                        </div>
                      )}

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

                      <a>
                        <button className="btnFinishtWork" onClick={e => handleClickUploadSlip(e, item.id)}>
                          ทำรายการสำเร็จ
                        </button>
                      </a>
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
