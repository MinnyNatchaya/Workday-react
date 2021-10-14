import ServiceTypeWorkerFilter from '../components/service/ServiceTypeWorkerFilter';
import ServiceTypeWorkerForm from '../components/service/ServiceTypeWorkerForm';

import axios from '../config/axios';
import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SeviceTypeWorker() {
  const param = useParams();
  const [subCategorys, setSubCategorys] = useState([]);
  const [orderItem, setOrderItem] = useState([]);

  const [city, setCity] = useState('');

  useEffect(() => {
    const callSubCategory = async () => {
      await axios
        .get(`/sub-category/${param.categoryId}`)
        .then(res => {
          setSubCategorys(res.data.subCategory);
        })
        .catch(err => {
          console.dir(err);
        });
    };
    callSubCategory();

    const callOrders = async () => {
      await axios
        .get(`/service-type-worker/category/${param.categoryId}`)
        .then(res => {
          setOrderItem(res.data.orders);
        })
        .catch(err => {
          console.dir(err);
        });
    };
    callOrders();
  }, []);

  const filterCity = city ? orderItem.filter(item => item.cityId == city) : [...orderItem];

  return (
    <section className="worker_service_fix_page">
      <div className="container">
        <div className="headerFix">
          <h2>{subCategorys?.[0]?.name}</h2>
        </div>
        <ServiceTypeWorkerFilter setCity={setCity} city={city} />
        <ServiceTypeWorkerForm filterCity={filterCity} />
      </div>
    </section>
  );
}

export default SeviceTypeWorker;
