import ProfileEditForm from '../components/profile/ProfileEditForm';

function ProfileEdit() {
  return (
    <section className="user_profile_page">
      <div className="container">
        <div className="headerFix">
          <h2>PROFILE</h2>
        </div>
        <ProfileEditForm />
      </div>
    </section>
  );
}

export default ProfileEdit;
