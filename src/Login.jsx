import React from "react";
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function Login() {
  return (
    <div className="Box">
      <div className="form-box login">
        <form action="#">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon"/>
          </div>

          <div className="remember-forget">
            <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot Password</a>
          </div>

          <button type="submit" className="btn2">Sign In</button>
          <div className="signup">
            <p>
              Don't have an account?<a href="/Basic_Login_SignUp_Page/SignUp">Register</a>
            </p>
          </div>
          <div className="back">
          <a href="/Basic_Login_SignUp_Page/">Back to Home</a>
        </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
