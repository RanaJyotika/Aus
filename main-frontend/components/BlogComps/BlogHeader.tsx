"use client";
import { motion } from "framer-motion";
// import { LampContainer } from "../LandingComps/Lamp";
import { LampContainer } from "../ui/lamp";

export default function BlogHeader() {

    
const GradientBlobBackground = () => {
  return (
    <>
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">

        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-animation opacity-30 blur-3xl transform translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-animation opacity-30 blur-3xl transform -translate-x-1/4" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-gradient-radial opacity-20 blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      {/* Animated Dots Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1.5" fill="var(--color-accent-glow)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>
    </>
  );
};

  return (
    <div className="h-[60vh] w-full relative" >
        {/* <section
      className="relative w-full py-20 px-20 md:py-10 overflow-hidden"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-text)",
      }}
    > */}
    <section className="relative w-full py-20 px-20 md:py-10 overflow-hidden bg-transparent text-white">

        {/* <GradientBlobBackground /> */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          // className="mt-5 bg-gradient-to-br from-black to-gray-800 py-4 bg-clip-text text-center text-4xl font-semibold tracking-widest text-transparent md:text-7xl"
           className="mt-5 py-4 text-center text-4xl font-semibold tracking-widest text-white md:text-7xl"
        >
          
          Nurture Notes
          <br />
          <p className="text-2xl font-black mt-10 tracking-widest text-white/100">
            "Learn. Reflect. Bloom."
          </p>
        </motion.h1>
      </LampContainer>

      </section>

      

    </div>

    // testing purpose bg 




  );
}
