"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  title: string;
  image: string;
  description: string;
  tools: string[];
  github: string;
  link: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoRotating) {
      interval = setInterval(handleNext, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handlePrev = () => {
    setIsAutoRotating(false);
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  const handleNext = () => {
    setIsAutoRotating(false);
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.push(newArray.shift()!);
      return newArray;
    });
  };

  return (
    <div className="relative h-[1000px] md:h-full md:mt-0 w-full mb-10 flex lg:justify-center lg:items-center ">
      {cards.map((card, index) => {
        const isComingSoon = card.link === "#" || card.github === "#";
        
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-[#0e1720] min-h-[600px] md:min-h-[800px] border border-neutral-700 mb-10 w-full md:h-full max-h-full md:max-h-[800px] rounded-3xl shadow-xl flex flex-col p-4 md:p-8 lg:max-w-[1100px]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="flex flex-row justify-between items-center gap-2 py-2 md:py-4 my-2 md:my-5">
              <button
                className="bg-[#42464a] w-10 h-10 md:hidden dark:bg-black rounded-full shadow-md flex items-center justify-center"
                onClick={handlePrev}
                aria-label="Previous project"
              >
                <ChevronLeftIcon className="h-5 w-5 text-white dark:text-gray-300" />
              </button>

              <h2 className="md:text-xl text-sm font-bold md:mb-4 text-lightBlue-200 max-w-[150px] md:max-w-full">
                {card.title}
              </h2>

              <button
                className="bg-[#42464a]  w-10 h-10 md:hidden dark:bg-black rounded-full shadow-md flex items-center justify-center"
                onClick={handleNext}
                aria-label="Next project"
              >
                <ChevronRightIcon className="h-5 w-5 text-white  dark:text-gray-300" />
              </button>
            </div>

            <div className="flex md:flex-row flex-col h-auto md:h-full gap-4">
              <div className="relative bg-white h-[300px] md:h-full min-h-[200px] md:min-h-[300px] flex-grow mb-2 md:mb-4 rounded-xl overflow-hidden w-full shadow-2xl">
                {isComingSoon && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="absolute -rotate-12 bg-yellow-400 text-black font-bold py-2 px-8 shadow-lg transform -translate-y-4 border-2 border-yellow-500">
                      <div className="flex items-center gap-2">
                        <BuildingOfficeIcon className="h-5 w-5" />
                        <span>Under Construction</span>
                      </div>
                    </div>
                    {/* <div className="w-16 h-16 animate-bounce mt-8">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        className="text-yellow-400"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                        />
                      </svg>
                    </div> */}
                  </div>
                )}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={95}
                    priority={index === 0}
                    className={cn(
                      "object-contain md:object-fill w-full h-full",
                      isComingSoon && "opacity-50"
                    )}
                  />
                </div>
              </div>
              <div className="w-full rounded-lg p-2 md:p-4 text-white flex flex-col justify-start md:justify-between gap-4 md:gap-8 text-sm md:text-xl">
                {card.description}
                <div className="flex md:flex-row flex-col md:gap-2 gap-6 justify-between items-center md:items-end">
                  <div className="flex flex-col gap-2">
                    <span className="text-white font-bold text-sm">Tools I used:</span> 
                    <div className="flex flex-wrap md:max-w-[300px] gap-2">
                      {card.tools.map((tool, index) => (
                        <span 
                          key={index} 
                          className="text-lightBlue-300 font-bold text-xs md:text-sm bg-[#202a33] px-2 py-1 rounded-md shadow-md"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex  flex-col gap-4 w-full lg:w-auto">
                    {/* {card.github !== "#" && (
                      <a 
                        href={card.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#60a2e4] py-2 font-bold text-md w-full md:w-auto bg-[#292d31] text-center px-4 rounded-lg  hover:bg-[#343a3f] transition-colors"
                      >
                        GitHub
                      </a>
                    )} */}
                    {card.link !== "#" && (
                      <a 
                        href={card.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#ffffff] py-2 font-bold text-md w-full md:w-auto bg-[#254463] text-center px-4 rounded-lg  hover:bg-[#343a3f] transition-colors"
                      >
                        View Demo
                      </a>
                    )}
                  </div>
                </div>
              </div> 
            </div>
          </motion.div>
        );
      })}

      <button
        className="absolute top-[40%] left-0 hidden md:block transform -translate-y-1/2 -translate-x-full bg-[#42464a]  p-2 rounded-full shadow-md "
        onClick={handlePrev}
        aria-label="Previous project"
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        className="absolute top-[40%] right-0  hidden md:block transform -translate-y-1/2 translate-x-full bg-[#42464a] p-2 rounded-full shadow-md"
        onClick={handleNext}
        aria-label="Next project"
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};
