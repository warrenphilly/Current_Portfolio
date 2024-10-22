"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScrollToBento = () => {
    const bentoSection = document.getElementById("bento-section");
    if (bentoSection) {
      bentoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" mt-16 lg:mt-0 overflow-hidden flex items-center justify-center min-h-screen ">
      <div className="container mx-auto px-4 py-8 md:py-0 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full">
          {/* Text content */}
          <div className="w-full space-y-4 md:space-y-6 mb-8 md:mb-0 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <div className="flex flex-col items-center md:items-start">
              <h2
                className={`text-2xl md:text-4xl font-semibold text-lightBlue-200 transform transition-all duration-500 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                How&apos;s it going? I&apos;m
              </h2>
              <h1
                className={`text-4xl sm:text-6xl md:text-8xl text-lightBlue-400 font-bold transform transition-all duration-500 delay-100 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                Warren
              </h1>
            </div>

            <h3
              className={`text-xl md:text-4xl text-lightBlue-200  font-semibold transform transition-all duration-500 delay-100 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              I&apos;m a Software Engineer 
            </h3>
            <div className="md:hidden w-56 h-56 mx-auto mr-24">
              <Image
                src="/assets/images/pureAvatar.png"
                alt="Warren"
                width={200}
                height={200}
                className="transition-all duration-300 w-full h-full"
              />
            </div>

            <p
              className={`hidden md:block text-sm md:text-lg text-white max-w-md mx-auto md:mx-0 transform transition-all duration-500 delay-200 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } shadow-glow-sm`}
            >
               I&apos;m a mostly sane software engineer. My code is so clean, it squeaks. When I&apos;m not turning coffee
              into code, I&apos;m dreaming up new ways to make computers do my
              bidding. 
            </p>

            {/* Avatar for mobile */}
            

            <div
              className={`transform transition-all duration-500 delay-300 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start w-full lg:mt-5">
                <button className="bg-lightBlue-300 w-full sm:w-[200px] text-white px-6 py-3 rounded-2xl cursor-pointer shadow-lg font-semibold hover:bg-darkBlue-400 transition-colors duration-300">
                  Download Resume
                </button>
                <button
                  className="w-full sm:w-[200px] text-white px-6 py-3 bg-lightBlue-700 rounded-2xl cursor-pointer shadow-lg font-semibold hover:bg-darkBlue-400 hover:text-white transition-colors duration-300"
                  onClick={handleScrollToBento}
                  aria-label="Scroll to Bento section"
                >
                  Check out My Stuff
                </button>
              </div>

                  <p
              className={`text-sm block lg:hidden  mt-6 md:text-lg text-lightBlue-900 max-w-md mx-auto md:mx-0 transform transition-all duration-500 delay-200 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } shadow-glow-sm`}
            >
               I&apos;m a mostly sane software engineer. My code is so clean, it squeaks. When I&apos;m not turning coffee
              into code, I&apos;m dreaming up new ways to make computers do my
              bidding. 
            </p>

            </div>
          </div>

          {/* Avatar for larger screens */}
          <div className="hidden md:flex md:w-full justify-center md:justify-end">
            <div className="relative w-[300px] h-[300px] lg:w-[800px] lg:h-[800px]">
              <Image
                src="/assets/images/pureAvatar.png"
                alt="Warren"
                layout="fill"
                objectFit="contain"
                className="transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
