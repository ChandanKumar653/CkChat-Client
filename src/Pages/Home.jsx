import React, { Suspense } from "react";
// import AnimationLoading from "../Components/AnimationLoading";

const LazyHero = React.lazy(() => import("../Components/Hero"));
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
    </Suspense>
  );
}
