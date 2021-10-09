import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../contexts/userContext';

// const service = [
//   {
//     name: 'งานไฟฟ้า',
//     logo: './images/circle-fix.png',
//     detail: ['สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ', 'หลอดไฟ', 'เครื่องใช้ไฟฟ้า', 'บริการงานไฟฟ้าอื่นๆ']
//   },
//   {
//     name: 'งานประปา',
//     logo: './images/circle-waterdrop.png',
//     detail: ['ท่อตัน', 'น้ำรั่วซึม', 'ท่อน้ำ-ระบบน้ำ-ระบบประปา', 'ปั๊มน้ำ', 'บริการงานประปาอื่นๆ']
//   },
//   {
//     name: 'บริการแม่บ้าน',
//     logo: './images/circle-broom.png',
//     detail: ['ทำความสะอาดบ้าน', 'ทำความสะอาดใหญ่', 'ซักผ้า-รีดผ้า', 'บริการงานบ้านอื่นๆ']
//   },
//   {
//     name: 'กำจัดแมลง',
//     logo: './images/circle-bug.png',
//     detail: ['กำจัดแมลง', 'พ่นยาฆ่าแมลง', 'งานกำจัดแมลงอื่นๆ']
//   }
// ];

function ServiceType() {
  const { chooseService, setChooseService } = useContext(UserContext);
  const [subCategorys, setSubCategorys] = useState([]);

  useEffect(() => {
    const callSubCategory = async () => {
      await axios
        .get('/sub-category')
        .then(res => {
          setSubCategorys(res.data.subCategory);
        })
        .catch(err => {
          console.log(err);
        });
    };
    callSubCategory();
  }, []);

  return (
    <section className="user_service_page">
      <div className="container">
        <div className="headerFix">
          <h2>{chooseService.category}</h2>
        </div>

        <div className="boxFixList">
          {subCategorys.map(item => (
            <Link to="/create-order">
              <div className="boxYellow">
                <img src={require(chooseService.logoUrl).default} alt="" />
                <div>
                  <p>{item.name}</p>
                </div>
              </div>
            </Link>
          ))}

          {/* <Link to="/create-order">
            <div className="boxYellow">
              <img src={require(`../images/circle-fix.png`).default} alt="" />
              <div>
                <p>สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ</p>
              </div>
            </div>
          </Link> */}

          {/* <a href="./user_crateList.html">
            <div className="boxYellow">
              <img src="./images/circle-fix.png" alt="" />
              <div>
                <p>หลอดไฟ</p>
              </div>
            </div>
          </a>

          <a href="./user_crateList.html">
            <div className="boxYellow">
              <img src="./images/circle-fix.png" alt="" />
              <div>
                <p>เครื่องใช้ไฟฟ้า</p>
              </div>
            </div>
          </a>

          <a href="./user_crateList.html">
            <div className="boxYellow">
              <img src="./images/circle-fix.png" alt="" />
              <div>
                <p>บริการงานไฟฟ้าอื่นๆ</p>
              </div>
            </div>
          </a> */}
        </div>
      </div>
    </section>
  );
}

export default ServiceType;
