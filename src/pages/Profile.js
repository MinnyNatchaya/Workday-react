import ProfileForm from '../components/profile/ProfileForm';

function Profile() {
  return (
    <section className="user_profile_page">
      <div className="container">
        <div className="headerFix">
          <h2>PROFILE</h2>
        </div>
        <div className="bodyProfile">
          <div className="imgCrop">
            <img className="imgCropChild" src={require('../images/maid.png').default} alt="" />
          </div>

          <h3>USERNAME</h3>

          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </div>

          <p>(5 REVIEW)</p>
          <h3>ประวัติ</h3>
        </div>
        <ProfileForm />
      </div>
    </section>
  );
}

export default Profile;
