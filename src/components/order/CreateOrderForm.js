import axios from '../../config/axios';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';

function CreateOrderForm() {
  const [cities, setCities] = useState([]);
  const history = useHistory();
  // const [telephone, setTelephone] = useState('');
  // const [address, setAddress] = useState('');
  const [detail, setDetail] = useState('');
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState({});

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
    setDetail('');
    setDate('');
    setCity('จังหวัด');
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

      // if (address.trim() === '') {
      //   setError(currErr => ({ ...currErr, address: '**Please enter your address' }));
      //   isError = true;
      // }

      if (date.trim() === '') {
        setError(currErr => ({ ...currErr, date: '**Please choose date' }));
        isError = true;
      }

      if (city.trim() === '') {
        setError(currErr => ({ ...currErr, city: '**Please choose city' }));
        isError = true;
      }

      // if (!isError) {
      //   await axios.post({
      //     date,
      //     detail,
      //     telephone,
      //     city,
      //     address,

      //   });
      //   history.push({
      //     pathname: '/profile/orders',
      //     state: { message: 'Your order has been created' }
      //   });
      // }
    } catch (err) {}
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
          />
          <textarea
            name="address"
            id="address"
            cols="100"
            rows="3"
            placeholder="ที่อยู่"
            onChange={e => {
              setError(curr => ({ ...curr, address: '' }));
              setAddress(e.target.value);
            }}
          /> */}
          <textarea
            name="detailsWork"
            id="detailsWork"
            cols="100"
            rows="8"
            placeholder="รายละเอียดงาน"
            value={detail}
            onChange={e => {
              setError(curr => ({ ...curr, detail: '' }));
              setDetail(e.target.value);
            }}
          />

          <input
            type="date"
            id="date"
            name="date"
            placeholder="วันที่ใช้บริการ"
            value={date}
            onChange={e => {
              setError(curr => ({ ...curr, date: '' }));
              setDate(e.target.value);
            }}
          />

          <select id="city" name="city">
            <option value="จังหวัด">จังหวัด</option>
            {cities.map(item => (
              <option
                value={item.name}
                onChange={e => {
                  setError(curr => ({ ...curr, city: '' }));
                  setCity(e.target.value);
                }}
              >
                {item.name}
              </option>
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

            <Link to="/create-order">
              <button className="btnclear" onClick={handleClickClear}>
                ล้างข้อมูล
              </button>
            </Link>
          </div>
          <div className="divBtnOrder">
            <Link to="/profile/orders">
              <button onClick={handleSubmitOrder}>ยืนยัน ORDER</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateOrderForm;
