import React,{useState} from "react";
import "../Login/Login.css";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const navigate=useNavigate();

 const [formData, setFormData] = useState({
    name:"",
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


      const isPasswordValid = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
        return regex.test(password);
      };
 const handleSubmit = (event) => {
   event.preventDefault();



   if (!isPasswordValid(formData.password)) {
      Swal.fire(
        "Oops!",
        "Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, and be at least 6 characters long.",
        "warning"
      );
     return;
   }

   // Proceed with form submission or other actions...
 };

  return (
    <section className="main">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="input-box">
            <span className="icon">
              <PersonIcon />
            </span>
            <input
              type="text"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
            ></input>
            <label>Name</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <MailIcon />
            </span>
            <input
              type="email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              required
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          {/* <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <p className="fp">Forgot Password</p>
          </div> */}
          <button type="submit">Sign Up</button>
          <div className="register-link">
            <p>
              Already have an account?{" "}
              <span
                className="a"
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
