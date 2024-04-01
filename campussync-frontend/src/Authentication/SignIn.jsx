import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-left">
          <span className="sign-up-title">Sign In</span>
            <form className="signup-form">
              <input className="signup-input" placeholder="email" type="email" />
              <input className="signup-input" placeholder="password" type="password" />
              <button type="submit" className="register-btn">Login</button>
            </form>
            <span style={{margin:'10px'}}>Haven't Regsitered Yet ? <Link to="/register" style={{color:"red"}}>Register</Link></span>
          </div>
          <div className="auth-right">
            <img className="auth-right-pic" src="/pointing.webp" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Signin;
