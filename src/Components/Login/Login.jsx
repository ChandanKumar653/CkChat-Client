import React, { useEffect, useState, useCallback } from "react";
import "./Login.css";
import MailIcon from "@mui/icons-material/Mail";
// import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {login} from '../../Redux/Slices/AuthSlice';
import { LinearProgress } from '@mui/material';
import {setLoginStatus,setAuthState} from '../../Redux/Slices/AuthSlice';
import Swal from 'sweetalert2';
export default function Login() {
  const navigate=useNavigate();
 const dispatch=useDispatch();
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
   dispatch(login(formData));
}



const res = useSelector((state) => state.auth);

// console.log(res);
if(res.login.status==="error"){
   Swal.fire(
     "Oops!",
     `${res.login.error}`,
     "error"
   );
  dispatch(setLoginStatus());
  
}
if (res.login.status === "success") {
  // Show success message for form submission
  Swal.fire(
    "Success!",
    "Login Success",
    "success"
  );
  console.log(res.login.data);
 localStorage.setItem("ckChatLoginToken", res.login.data);
 const temp = {
   isAuthenticated: true,
   token: res.login.data,
   decoded: null,
 };
 dispatch(setLoginStatus());
dispatch(setAuthState(temp));
  
}

 const memoizedNavigate = useCallback(() => {
   if (res.local.isAuthenticated) {
     navigate("/personal-chat", { replace: true });
   }
 }, [navigate, res.local.isAuthenticated]);

 useEffect(() => {
   memoizedNavigate();
 }, [memoizedNavigate]);


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
          {res?.login?.status === "loading" ? (
            <div>
              <LinearProgress />
            </div>
          ) : (
            <button type="submit">Login</button>
          )}

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
