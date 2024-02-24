import React from 'react'
import "./Login.css";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
export default function Login() {
  return (
 <section className='main'>
      <div className="login-box">
        <form>
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <MailIcon />
            </span>
            <input type="email" required></input>
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <LockIcon />
            </span>
            <input type="password" required></input>
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <p className='fp'>
                Forgot Password
            </p>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <span className="a">Register</span>
            </p>
          </div>
        </form>
      </div>
     </section>  
  );
}
