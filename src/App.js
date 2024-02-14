import React,{useState,useEffect} from 'react';
import Layout from './Layout'
import NavBar from './Components/NavBar';
// import AnimationTest from './Components/AnimationTest';
import Home from './Pages/Home';
import PageNotFound from './Components/PageNotFound';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import AnimationLoading from './Components/AnimationLoading';
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {isLoading?<div><AnimationLoading/></div>:
    <BrowserRouter>
        <div className='bg-[#0e0e0f] w-full overflow-hidden pt-2 pl-16 pr-16'>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Layout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      {/* <Layout /> */}
{/* <AnimationTest/> */}
        </div>
      </BrowserRouter>
}
    </>
  )
}
