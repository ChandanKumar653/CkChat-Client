import React, { Suspense } from "react";
// import AnimationLoading from "../Components/AnimationLoading";

const LazyHero = React.lazy(() => import("../Components/Hero"));
const LazyTestimonials = React.lazy(() => import("../Components/Testimonials/Testimonials"));
export default function App() {
    
  return (
    <div className="bg-[#0e0e0f]">
      <Suspense>
        {/* fallback=
      {
        <div>
          <AnimationLoading />
        </div>
      } */}

        <LazyHero />

        <LazyTestimonials />
        <br />
        <br />
      </Suspense>
    </div>
  );
}
