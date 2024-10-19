"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll, useAnimate } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
    tools?: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [scope] = useAnimate();
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)/[0.9]",
    "var(--black)/[0.9]",
    "var(--neutral-900)/[0.9]",
  ];

  const handleCardClick = (index: number) => {
    if (ref.current) {
      const containerHeight =
        ref.current.scrollHeight - ref.current.clientHeight;
      const scrollPosition = (index / (cardLength - 1)) * containerHeight;
      ref.current.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
    setActiveCard(index);
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[50rem] bg-blue-500 overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div
        className="div relative flex items-start px-4 w-full h-full"
        ref={scope}
      >
        <div className="w-full h-full">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="w-full flex flex-col items-center justify-center mb-10 py-5"
            >
              <div className="flex flex-col lg:flex-row  justify-center items-center lg:h-[400px] w-full gap-10">
                <div className="flex flex-col gap-2 lg:w-full">
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-2xl font-bold text-slate-100 cursor-pointer"
                    onClick={() => handleCardClick(index)}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-kg text-slate-300 max-w-sm mt-10 "
                  >
                    {item.description}
                  </motion.p>
                </div>

                <div className="flex flex-col justify-end flex-wrap h-fit max-w-[400px] gap-3">
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-2xl font-bold text-slate-100"
                  >
                    My Tools
                  </motion.h2>
                  <div className="flex flex-row justify-start flex-wrap h-fit w-[400px] gap-3">
                    {item.tools?.map((tool) => (
                      <div
                        className=" bg-darkBlue-400 shadow-md text-white rounded-lg px-2 py-1 text-md"
                        key={tool}
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Extra padded div to prop up the final index */}
          <div className="h-screen" />
        </div>
      </div>
    </motion.div>
  );
};
