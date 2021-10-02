function OrdersWorker() {
  return (
    <div class="boxYellow">
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

        <p>ที่อยู่ :</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga blanditiis et! Optio est beatae,
          voluptates et ipsum quidem consequatur quaerat ipsam perferendis nobis. Natus saepe cupiditate alias ab illum!
        </p>
        <p>รายละเอียด :</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga blanditiis et! Optio est beatae,
          voluptates et ipsum quidem consequatur quaerat ipsam perferendis nobis. Natus saepe cupiditate alias ab illum!
        </p>
        <br />
        <div class="divBtnWorkerOrder">
          <button class="btnCancleWork">ยกเลิกงาน</button>
          <a href="#">
            <button class="btnFinishtWork">ทำรายการสำเร็จ</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrdersWorker;
