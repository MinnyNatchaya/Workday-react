function ServiceTypeWorkerFilter() {
  return (
    <div className="boxesList">
      <select className="listWorkType" id="workType" name="workType">
        <option value="ประเภทงาน">ประเภทงาน</option>
        <option value="สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ">สายไฟ-ปลั๊กไฟ-สวิตซ์ไฟ</option>
        <option value="หลอดไฟ">หลอดไฟ</option>
        <option value="เครื่องใช้ไฟฟ้า">เครื่องใช้ไฟฟ้า</option>
        <option value="บริการงานไฟฟ้าอื่นๆ">บริการงานไฟฟ้าอื่นๆ</option>
      </select>

      <select className="listCity" id="city" name="city">
        <option value="จังหวัด">จังหวัด</option>
        <option value="กรุงเทพ">กรุงเทพ</option>
        <option value="นนทบุรี">นนทบุรี</option>
        <option value="ปทุมธานี">ปทุมธานี</option>
        <option value="นครปฐม">นครปฐม</option>
        <option value="สมุทรสาคร">สมุทรสาคร</option>
        <option value="สมุทรปราการ">สมุทรปราการ</option>
        <option value="อื่นๆ">อื่นๆ</option>
      </select>
    </div>
  );
}

export default ServiceTypeWorkerFilter;
