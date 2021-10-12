import { useContext, useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../contexts/userContext';

function ServiceType() {
  const { chooseService, setChooseService } = useContext(UserContext);
  const [subCategorys, setSubCategorys] = useState([]);
  const { role } = useContext(UserContext);
  const param = useParams();
  const history = useHistory();
  // console.dir(param);

  useEffect(() => {
    const callSubCategory = async () => {
      await axios
        .get(`/sub-category/category/${param.categoryId}`)
        .then(res => {
          // console.log(res);
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
          <h2>{subCategorys?.[0]?.Category?.name}</h2>
        </div>

        <div className="boxFixList">
          {subCategorys.map(item => (
            <a>
              <div
                className="boxYellow"
                onClick={
                  () => history.push(role === 'client' ? `/order/${item.id}` : `service-type-worker/${item.id}`)
                  // setChooseService(curr => ({ ...curr, key: item.id, subCategoryId: item.id, subCategory: item.name }))
                }
              >
                <img src={item.Category.logoUrl} alt="" />
                <div>
                  <p>{item.name}</p>
                </div>
              </div>
            </a>
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
