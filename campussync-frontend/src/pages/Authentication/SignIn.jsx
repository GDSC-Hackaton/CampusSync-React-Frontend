import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorCard from "./ErrorCard";
const Signin = () => {
  const [formdata, setData] = useState({
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formdata, [name]: value });
  };
  const validateForm = () => {
    if (formdata.email.trim() === "" || formdata.password.trim() === "") {
      setError("Your Email or password is empty !");
      return false;
    }
    if (formdata.password.trim().length < 5) {
      setError("Password is too long");
    }
    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
    } else {
      setShowError(true);
    }
  };
  return (
    <>
      <div className="auth-container">
        <div className="auth-box">
          <div className="auth-left">
            <span className="sign-up-title">Sign In</span>
            {showError && <ErrorCard error={error} />}
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="signup-input-container">
                <i className="fas fa-envelope"></i>
                <input
                  className="signup-input"
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="email"
                  onChange={handleChange}
                />
              </div>
              <div className="signup-input-container">
                <i className="fas fa-lock"></i>
                <input
                  className="signup-input"
                  name="password"
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="register-btn">
                Login
              </button>
            </form>
            <span style={{ margin: "10px" }}>
              Haven't Regsitered Yet ?{" "}
              <Link to="/register" style={{ color: "red" }}>
                Register
              </Link>
            </span>
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
