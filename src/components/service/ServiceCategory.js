import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import axios from '../../config/axios';

function ServiceCategory() {
  const { role, setChooseService } = useContext(UserContext);
  const history = useHistory();

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
            item.name === 'งานไฟฟ้า'
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

              <button
                onClick={() => {
                  // console.log(`item.id`, item.id);
                  history.push(`/service-type/${item.id}`);
                  // setChooseService({ key: item.id, categoryId: item.id, category: item.name, logoUrl: item.logoUrl })
                }}
              >
                {/* {console.dir(item.id)} */}
                {role === 'client' ? 'จองบริการ >' : 'ORDER >'}
              </button>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default ServiceCategory;
