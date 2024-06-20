import React,{useState,useCallback,useEffect} from "react";
import "../Login/Login.css";
import MailIcon from "@mui/icons-material/Mail";
// import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import Swal from "sweetalert2";
import {useSelector,  useDispatch } from "react-redux";
import { registerUser } from "../../Redux/Slices/AuthSlice";

import { useNavigate } from "react-router-dom";
import { LinearProgress } from "@mui/material";
export default function Signup() {
    const navigate=useNavigate();
   const dispatch=useDispatch();
 const [formData, setFormData] = useState({
    name:"",
   email: "",
   password: "",
 });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
 const handleSubmit =async (event) => {
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
   dispatch(registerUser(formData));
 };
const res = useSelector((state) => state.auth);
const memoizedNavigate = useCallback(() => {
  if (res.local.isAuthenticated) {
    navigate("/personal-chat", { replace: true });
  }
}, [navigate, res.local.isAuthenticated]);

useEffect(() => {
  memoizedNavigate();
}, [memoizedNavigate]);


console.log(res);
if(res.signup.status==="error"){
   Swal.fire(
     "Oops!",
     `${res.signup.error}`,
     "error"
   );
  
}
if (res.signup.status === "success") {
  // Show success message for form submission
  Swal.fire(
    "Success!",
    "Verification link sent!! Please check you email.",
    "success"
  );
 




  // Return HTML to display a message about verification email
  return (
    <div className="flex items-center justify-center h-screen main">
      <div className="bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 m-4">
        <div className="p-6 text-center">
          <p className="text-white leading-normal">
            Thank you for signing up! An email has been sent to{" "}
            <strong>{formData.email}</strong> with a verification link. <br />
            Please check your inbox and follow the instructions to verify your
            account.
          </p>
          <p className="text-white mt-4 leading-normal">
            Please note that the verification link will expire in 5 minutes.
          </p>
        </div>
      </div>
    </div>
  );
}
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
              value={formData.password}
              required
              onChange={handleChange}
            />
            <label>Password</label>
          </div>

          {res?.signup?.status === "loading" ? (
            <div>
              <LinearProgress />
            </div>
          ) : (
            <button type="submit">Sign Up</button>
          )}

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
