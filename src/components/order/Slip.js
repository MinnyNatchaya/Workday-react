function Slip() {
  return (
    <div className="slipPopup">
      <i className="fas fa-times iconX"></i>

      <h2>ยืนยันรายการรับเงิน</h2>

      <div className="imgSlipCrop">
        <img className="imgSlipCropChild" src={require('../../images/maid.png').default} alt="" />
      </div>

      <div className="btnSlipPopup">
        <button className="btnCancleSlip">ยกเลิก</button>
        <button className="btnAcceptSlip">ตกลง</button>
      </div>
    </div>
  );
}

export default Slip;
