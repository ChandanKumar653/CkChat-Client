import React, { Suspense } from "react";
// import AnimationLoading from "../Components/AnimationLoading";

const LazyHero = React.lazy(() => import("../Components/Hero"));
const LazyTestimonials = React.lazy(() => import("../Components/Testimonials/Testimonials"));
const LazyNORobot = React.lazy(() => import("../Components/NoRobot/NoRobot"));
const LazyMobileInfo = React.lazy(() => import("../Components/MobileInfo/MobileInfo"));
// const LazyFooter=React.lazy(()=>import("../Components/Footer/Footer"));
export default function App() {
    
  return (
    <div className="bg-[#0e0e0f] pl-8 pr-8 md:pl-16 md:pr-16">
      <Suspense>
        {/* fallback=
      {
        <div>
          <AnimationLoading />
        </div>
      } */}

        <LazyHero />
    
          <br />
          <br />
          <br />
     
        <LazyTestimonials />
        <br />

        <LazyNORobot />
        
        <LazyMobileInfo/>
        <br/>
      
      </Suspense>
    </div>
  );
}
