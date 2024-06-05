import React from "react";
import "./SignUp.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function SignUp() {
  return (
    <div className="Box1">
      <div className="form-box login">
        <form action="#">
          <h1>SignUp</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input type="email" placeholder="Your Email" required />
            <MdEmail className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Your Password" required />
            <FaLock className="icon" />
          </div>

          <div className="input-box">
            <input type="password" placeholder="Confirm Password" required />
            <FaLock className="icon" />
          </div>

          <div className="agreeTerms">
            <label>
              <input type="checkbox" />I agree to the terms and conditions
            </label>
          </div>

          <button type="submit" className="btn1">
            Sign Up
          </button>
          <div className="signup">
            <p>
              Already have an account?
              <a href="/Basic_Login_SignUp_Page/Login">Sign in</a>
            </p>
          </div>
        <div className="back1">
          <a href="/Basic_Login_SignUp_Page/">Back to Home</a>
        </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
