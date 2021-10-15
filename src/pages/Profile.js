import ProfileForm from '../components/profile/ProfileForm';
import ReviewStar from '../components/profile/ReviewStar';

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
