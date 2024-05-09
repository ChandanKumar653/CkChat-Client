import React,{ useState} from 'react'
import "./Login.css";
import MailIcon from "@mui/icons-material/Mail";
// import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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
  
   const [showPassword, setShowPassword] = useState(false);
   const togglePasswordVisibility = () => {
     setShowPassword(!showPassword);
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
            <span
              className="icon"
              onClick={togglePasswordVisibility}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
            <input
              type={showPassword ? "text" : "password"}
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
