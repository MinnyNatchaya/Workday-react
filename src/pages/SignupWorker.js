import SignupForm from '../components/signup/SignupForm';

function SignupWorker() {
  return (
    <section className="all_signup_user_page">
      <div className="container">
        <h2>ร่วมทำงานกับ WORKDAY</h2>
        <SignupForm signupPage="worker" />
      </div>
    </section>
  );
}

export default SignupWorker;
