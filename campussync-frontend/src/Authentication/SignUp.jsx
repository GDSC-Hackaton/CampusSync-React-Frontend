import "./auth.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-box">
     
          <div className="auth-right">
            <img className="auth-right-pic" src="/right.png" />
          </div>
          <div className="auth-left">
            <span className="sign-up-title">Sign Up</span>
            <form className="signup-form">
            <input className="signup-input" placeholder="username" type="text" />
              <input className="signup-input" placeholder="email" type="email" />
              <input className="signup-input" placeholder="password" type="password" />
              <input className="signup-input" placeholder="confirm password" type="password" />
              <button type="submit" className="register-btn">Register</button>
            </form>
            <span style={{margin:'15px'}}>Already Regsitered ? <Link  to="/" style={{color:"red"}}>Login</Link></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
