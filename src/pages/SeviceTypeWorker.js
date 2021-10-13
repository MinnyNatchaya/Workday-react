import ServiceTypeWorkerFilter from '../components/service/ServiceTypeWorkerFilter';
import ServiceTypeWorkerForm from '../components/service/ServiceTypeWorkerForm';

import axios from '../config/axios';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SeviceTypeWorker() {
  const param = useParams();
  const [subCategorys, setSubCategorys] = useState([]);

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
    <section className="worker_service_fix_page">
      <div className="container">
        <div className="headerFix">
          <h2>{subCategorys?.[0]?.Category?.name}</h2>
        </div>
        <ServiceTypeWorkerFilter />
        <ServiceTypeWorkerForm />
      </div>
    </section>
  );
}

export default SeviceTypeWorker;
