import React, { Suspense } from "react";
// import AnimationLoading from "../Components/AnimationLoading";

const LazyHero = React.lazy(() => import("../Components/Hero"));
const LazyTestimonials=React.lazy(()=>import("../Components/Testimonials"));
export default function App() {
    
  return (
    <Suspense>
      {/* fallback=
      {
        <div>
          <AnimationLoading />
        </div>
      } */}
      
      <LazyHero />



      {/* <LazyTestimonials/> */}
    </Suspense>
  );
}
