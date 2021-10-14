import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function CreateOrderForm() {
  const [cities, setCities] = useState([]);
  const history = useHistory();
  // const [telephone, setTelephone] = useState('');
  const [address, setAddress] = useState('');
  const [detail, setDetail] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState({});

  const param = useParams();

  useEffect(() => {
    const callCity = async () => {
      await axios
        .get('/city')
        .then(res => {
          setCities(res.data.city);
        })
        .catch(err => {
          console.log(err);
        });
    };
    callCity();
  }, []);

  const handleClickClear = () => {
    setAddress('');
    setDetail('');
    setDate('');
    setCity('');
    setError('');
  };

  const handleSubmitOrder = async e => {
    e.preventDefault();

    let isError = false;

    try {
      // if (telephone.trim() === '') {
      //   setError(currErr => ({ ...currErr, telephone: '**Please enter your telephone' }));
      //   isError = true;
      // }

      if (address.trim() === '') {
        setError(currErr => ({ ...currErr, address: '**Please enter your address' }));
        isError = true;
      }

      if (date.trim() === '') {
        setError(currErr => ({ ...currErr, date: '**Please choose date' }));
        isError = true;
      }

      if (city.trim() === '') {
        setError(currErr => ({ ...currErr, city: '**Please choose city' }));
        isError = true;
      }

      if (!isError) {
        await axios.post(`/order/create/${param.subCategoryId}`, {
          address,
          date,
          detail,
          city
        });
        history.push({
          pathname: '/profile/orders',
          state: { message: 'Your order has been created' }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="all_signup_user_page">
      <div className="container">
        <h2>ข้อมูลติดต่อ</h2>

        <div className="inputSignUpUser">
          {/* <input
            className="w100"
            type="text"
            id="tel"
            name="tel"
            placeholder="หมายเลขโทรศัพท์"
            onChange={e => {
              setError(curr => ({ ...curr, telephone: '' }));
              setTelephone(e.target.value);
            }}
          /> */}
          {error.address && <p className="errorMessage">{error.address}</p>}
          <textarea
            name="address"
            id="address"
            cols="100"
            rows="5"
            placeholder="ที่อยู่"
            value={address}
            onChange={e => {
              setError(curr => ({ ...curr, address: '' }));
              setAddress(e.target.value);
            }}
          />

          <textarea
            name="detailsWork"
            id="detailsWork"
            cols="100"
            rows="4"
            placeholder="รายละเอียดงาน"
            value={detail}
            onChange={e => {
              setError(curr => ({ ...curr, detail: '' }));
              setDetail(e.target.value);
            }}
          />

          <p>วันที่ต้องการให้เริ่มงาน</p>
          {error.date && <p className="errorMessage">{error.date}</p>}
          <input
            className="w100"
            type="date"
            id="date"
            name="date"
            placeholder="วันที่ต้องการให้เริ่มงาน"
            value={date}
            onChange={e => {
              setError(curr => ({ ...curr, date: '' }));
              setDate(e.target.value);
            }}
          />

          <p>เลือกจังหวัดที่ต้องการรับบริการ</p>
          {error.city && <p className="errorMessage">{error.city}</p>}
          <select
            id="city"
            name="city"
            className="w100"
            value={city}
            onChange={e => {
              setError(curr => ({ ...curr, city: '' }));
              setCity(e.target.value);
            }}
          >
            <option value="">จังหวัด</option>
            {cities.map(item => (
              <option value={item.id}>{item.name}</option>
            ))}

            {/* <option value="กรุงเทพ">กรุงเทพ</option>
            <option value="นนทบุรี">นนทบุรี</option>
            <option value="ปทุมธานี">ปทุมธานี</option>
            <option value="นครปฐม">นครปฐม</option>
            <option value="สมุทรสาคร">สมุทรสาคร</option>
            <option value="สมุทรปราการ">สมุทรปราการ</option>
            <option value="อื่นๆ">อื่นๆ</option> */}
          </select>
        </div>

        <div className="user_crateList_page_btn">
          <div>
            <Link to="/service">
              <button className="btncancle">ยกเลิก</button>
            </Link>

            <a>
              <button className="btnclear" onClick={handleClickClear}>
                ล้างข้อมูล
              </button>
            </a>
          </div>
          <div className="divBtnOrder">
            <a>
              <button onClick={handleSubmitOrder}>ยืนยัน ORDER</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateOrderForm;
