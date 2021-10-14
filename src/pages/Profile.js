import ReviewStar from '../components/order/ReviewStar';
import ProfileForm from '../components/profile/ProfileForm';

function Profile() {
  return (
    <section className="user_profile_page">
      <div className="container">
        <div className="headerFix">
          <h2>PROFILE</h2>
        </div>
        <ProfileForm />
        <ReviewStar />
      </div>
    </section>
  );
}

export default Profile;
