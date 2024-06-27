import React,{useState,useEffect} from 'react';
import Layout from './Layout'
import NavBar from './Components/NavBar';
// import AnimationTest from './Components/AnimationTest';
import Home from './Pages/Home';
import PageNotFound from './Components/PageNotFound';
import { Routes, Route, useLocation } from 'react-router-dom';
import AnimationLoading from './Components/AnimationLoading';
import JoinRoom from './Pages/JoinRoom';
import Room from './Components/Room';
import { SocketProvider } from './Providers/Socket';
import Login from './Components/Login/Login';
import { PeerProvider } from './Providers/Peer';
// import Test1 from './Components/Test1';
// import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import RoomTest from './Components/RoomTest';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import TestRedux from './Components/Test/TestRedux';
import Signup from './Components/SignUp/Signup';
import { apiLink } from './Constants';
import Verify from './Components/verifyUser/Verify';
import PersonalChat from './Components/PersonalChat/index';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch } from 'react-redux';
import { checkAuth } from './Redux/Slices/AuthSlice';
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
 const dispatch=useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [dispatch]);

  const location = useLocation();

  // Define the paths where Navbar should not be rendered
  const navbarExcludedPaths = [
    "/chat",
    "/chat/:userName/:roomId",
    "/room-test",
    "/personal-chat",
  ]; // Change these to your desired paths

  // Check if the current path matches any excluded path
  // const shouldRenderNavbar = !navbarExcludedPaths.includes(location.pathname);
const shouldRenderNavbar = navbarExcludedPaths.every((path) => {
  const regex = new RegExp("^" + path.replace(/:[^\s/]+/g, "[^\\s/]+") + "$");
  return !regex.test(location.pathname);
});

const [captchaVerified,setCaptchaVerified]=useState(true);
 const onRecaptchaChange = async(value) => {
  
  //  console.log(value);
   if (value) {
     // send to backend for validation
     let body = {
       reCarecaptchaToken:value
     };
     try{
    //  const res = await axios.post("http://localhost:3001/verifyCaptcha", body);
     const res = await axios.post(
       `${apiLink}/verifyCaptcha`,
       body
     );
        // console.log(res);
        if(res.status===200){
          setCaptchaVerified(true);
        }
     }catch(e){
console.log("Error verifying captcha:",e);
     }
   }
 };





  return (
    <>
      {captchaVerified ? (
        <>
          {isLoading ? (
            <div>
              <AnimationLoading />
            </div>
          ) : (
            <>
              <div>{shouldRenderNavbar && <NavBar />}</div>
             
              <PeerProvider>
                
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/chat" element={<Layout />} />
                  <Route path="/test" element={<TestRedux />} />
                  <Route path="/sign-in" element={<Login />} />
                  <Route path="/sign-up" element={<Signup />} />
                      {/* Protected Routes */}
                      {/* <Route path="/" element={<ProtectedRoute />}>
                        <Route path="/personal-chat" element={<PersonalChat />} />
                      </Route> */}
                 {/* {isAuthenticated? <Route path="/personal-chat" element={<PersonalChat />} />:""} */}
                    <Route
                      path="/personal-chat"
                      element={
                        <ProtectedRoute>
                          <SocketProvider>
                          <PersonalChat />
                          </SocketProvider>
                        </ProtectedRoute>
                      } 
                    />
                  <Route path="/room-test" element={<RoomTest />} />
                  <Route path="/auth/:token" element={<Verify />} />
                  {/* <SocketProvider>
              <Route path="/join-room" element={<JoinRoom />} />
              <Route path="/chat/:userName/:roomId" element={<Room />} />
            </SocketProvider> */}

                  <Route
                    path="/join-room"
                    element={
                      <SocketProvider>
                        <JoinRoom />
                      </SocketProvider>
                    }
                  />

                  <Route
                    path="/chat/:userName/:roomId"
                    element={
                      <SocketProvider>
                        <Room />
                      </SocketProvider>
                    }
                  />

                  <Route path="*" element={<PageNotFound />} />
                </Routes>
                  
              </PeerProvider>
             
              {/* <Layout /> */}
              {/* <AnimationTest/> */}
              <div>{shouldRenderNavbar && <Footer />}</div>
            </>
          )}
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form>
            <ReCAPTCHA
              sitekey="6Ldj98YpAAAAAJ8TS2oNi5_hagHXJQwoMewoJ9Po"
              onChange={onRecaptchaChange}
            />
          </form>
        </div>
      )}
    </>
  );
}
