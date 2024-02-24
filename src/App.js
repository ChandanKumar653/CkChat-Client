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
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const location = useLocation();

  // Define the paths where Navbar should not be rendered
  const navbarExcludedPaths = ['/chat', '/testkfkd']; // Change these to your desired paths

  // Check if the current path matches any excluded path
  const shouldRenderNavbar = !navbarExcludedPaths.includes(location.pathname);


  return (
    <>
    {isLoading?<div><AnimationLoading/></div>:
   
      <>
          <div>
            {shouldRenderNavbar && <NavBar />}
          </div>
          <SocketProvider>
          <Routes>
         
            <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Layout />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/join-room" element={<JoinRoom />} />
              <Route path="/chat/:userName/:roomId" element={<Room />} />
            <Route path="*" element={<PageNotFound />} />
           
          </Routes>
          </SocketProvider>
      {/* <Layout /> */}
{/* <AnimationTest/> */}
        </>
     
}
    </>
  )
}
