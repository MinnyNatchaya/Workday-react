function OrdersClientActive() {
  return (
    <div class="boxYellowWithWorker">
      <div class="boxYellowup">
        <img src={require('../images/circle-fix.png').default} alt="" />

        <div class="fixDetail">
          <h3>ORDER :</h3>
          <p>ประเภทงาน</p>
          <p>วันที่ :</p>
        </div>
      </div>

      <hr />

      <div class="boxYellowDown">
        <div class="boxYellowDownDetail">
          <div class="boxYellowDownL">
            <p>ผู้รับบริการ : MMMMMM MMMMMM</p>
            <p>เบอร์โทรติดต่อ : 080-000-0000</p>
            <div class="star">
              <pre>คะแนนรีวิว : </pre>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <i class="far fa-star"></i>
            </div>
          </div>

          <button class="btnChangeWorker">เปลี่ยนช่าง</button>
        </div>

        <button class="btnUpSlip">อัพโหลดหลักฐานการชำระเงิน</button>
        <a href="#">
          <button class="btnFinishtWork">ทำรายการสำเร็จ</button>
        </a>
      </div>
    </div>
  );
}

export default OrdersClientActive;
