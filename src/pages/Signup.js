import SignupForm from '../components/signup/SignupForm';

function Signup() {
  return (
    <section className="all_signup_user_page">
      <div className="container">
        <h2>สมัครง่าย และรวดเร็ว</h2>
        <SignupForm signupPage="cleint" />
      </div>
    </section>
  );
}

export default Signup;
