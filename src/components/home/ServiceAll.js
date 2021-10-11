import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import axios from '../../config/axios';

function ServiceAll() {
  const { role, setChooseService } = useContext(UserContext);

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const callCategory = async () => {
      await axios
        .get('/category')
        .then(res => {
          setCategorys(res.data.category);
        })
        .catch(err => {
          console.log(err);
        });
    };
    callCategory();
  }, []);

  return (
    <section className="service">
      <div className="container">
        {categorys.map(item => (
          <Link to="/service-type">
            <div
              className={`${
                item.name === 'งานไฟฟ้า'
                  ? 'fixLight'
                  : item.name === 'งานประปา'
                  ? 'fixWater'
                  : item.name === 'บริการแม่บ้าน'
                  ? 'fixMaid'
                  : 'fixBug'
              }`}
            >
              <div
                className="box"
                onClick={() =>
                  setChooseService({ key: item.id, categoryId: item.id, category: item.name, logoUrl: item.logoUrl })
                }
              >
                <h1>{item.name}</h1>
                <h3>{item.caption}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ServiceAll;
