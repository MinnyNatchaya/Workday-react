import { useEffect, useState } from 'react';
import axios from '../../config/axios';

function ServiceTypeWorkerFilter({ city, setCity }) {
  const [cities, setCities] = useState([]);

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

  return (
    <div className="boxesList">
      {/* <select className="listWorkType" id="workType" name="workType">
        <option value="ประเภทงาน">ประเภทงาน</option>
        <option value="สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ">สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ</option>
        <option value="หลอดไฟ">หลอดไฟ</option>
        <option value="เครื่องใช้ไฟฟ้า">เครื่องใช้ไฟฟ้า</option>
        <option value="บริการงานไฟฟ้าอื่นๆ">บริการงานไฟฟ้าอื่นๆ</option>
      </select> */}

      <select className="listCity" id="city" name="city" value={city} onChange={e => setCity(e.target.value)}>
        <option value="">จังหวัด</option>
        {cities.map(item => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export default ServiceTypeWorkerFilter;
