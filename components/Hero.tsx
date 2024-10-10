"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToBento = () => {
    const bentoSection = document.getElementById('bento-section');
    if (bentoSection) {
      bentoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center  h-screen px-36">
          {/* Text content */}
          <div className="md:w-1/2 space-y-6 mb-12 md:mb-0 text-left">
            <h2
              className={`text-3xl font-semibold text-warm-400 transform transition-all duration-500 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Hey, I'm
            </h2>

           
              <h1
                className={`text-8xl sm:text-6xl text-warm-700 font-bold text-gray-400 transform transition-all duration-500 delay-100 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                Warren,
              </h1>
          
            <h3
              className={`text-4xl text-warm-500 font-semibold text-warm-600 transform transition-all duration-500 delay-100 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              Software Engineer
            </h3>
            <p
              className={`text-2xl  text-warm-500 max-w-md transform transition-all duration-500 delay-200 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              I turn coffee into code and bring ideas to life.
            </p>
            <div
              className={`transform transition-all duration-500 gap-4 delay-300 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <button className="bg-warm-900 text-white px-6 py-3 rounded-2xl cursor-pointer shadow-lg font-semibold hover:bg-warm-600 transition-colors duration-300">
                Download Resume
              </button>
              <button 
                className="ml-4 bg-warm-900 text-white px-6 py-3 rounded-2xl cursor-pointer shadow-lg font-semibold hover:bg-warm-600 transition-colors duration-300"
                onClick={handleScrollToBento}
                aria-label="Scroll to Bento section"
              >
                Check out My Stuff
              </button>
            </div>
          </div>

          {/* Avatar */}
          <div className="md:w-1/2  flex justify-center md:justify-end">
            <div className="relative">
              
            
                <Image
                  src="/assets/images/myAvatar.png"
                  alt="Warren"
                  width={600}
                  height={600}
                  className="transition-all duration-300 w-full h-full"
                />
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
