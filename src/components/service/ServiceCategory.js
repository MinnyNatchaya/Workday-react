import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import axios from '../../config/axios';

function ServiceCategory() {
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
    <>
      {categorys.map(item => (
        <section
          className={`service_page_${
            item.name === 'การไฟฟ้า'
              ? 'fix'
              : item.name === 'งานประปา'
              ? 'water'
              : item.name === 'บริการแม่บ้าน'
              ? 'maid'
              : 'bug'
          }`}
        >
          <div className="container">
            <div>
              <h1>{item.name}</h1>
              <h3>{item.caption}</h3>
              <Link to="/service-type">
                <button
                  onClick={() => setChooseService({ categoryId: item.id, category: item.name, logoUrl: item.logoUrl })}
                >
                  {role === 'client' ? 'จองบริการ >' : 'ORDER >'}
                </button>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ServiceCategory;
