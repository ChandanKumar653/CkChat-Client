import React,{ useState} from 'react'
import "./Login.css";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate=useNavigate();

   const [formData, setFormData] = useState({
     email: "",
     password: "",
   });

   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };
  
 

const handleSubmit=async(e)=>{
  e.preventDefault();
}

  return (
    <section className="main">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <MailIcon />
            </span>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            ></input>
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <LockIcon />
            </span>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
            ></input>
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <p className="fp">Forgot Password</p>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <span
                className="a"
                onClick={() => {
                  navigate("/sign-up");
                }}
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
