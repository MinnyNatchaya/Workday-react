function Review() {
  return (
    <div className="reviewPopup">
      <i className="fas fa-times iconX"></i>

      <h2>ให้คะแนนผู้ให้บริการ</h2>
      {/* <h2>ให้คะแนนผู้รับบริการ</h2> */}

      <div className="imgCrop">
        <img className="imgCropChild" src={require('../images/maid.png').default} alt="" />
      </div>

      <h3>USERNAME</h3>

      <div className="star">
        <i className="fas fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
        <i className="far fa-star"></i>
      </div>

      <textarea name="userReview" id="userReview" cols="30" rows="5">
        เขียนรีวิว
      </textarea>
      <button className="btnAcceptReview">ยืนยัน</button>
    </div>
  );
}

export default Review;
