"use client";
import React, { useRef, useEffect } from "react";
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

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const direction = e.deltaY > 0 ? 1 : -1;
      const newIndex = Math.max(0, Math.min(cardLength - 1, activeCard + direction));
      handleCardClick(newIndex);
    };

    const container = ref.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [activeCard, cardLength]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[50rem] w-full overflow-y-auto flex justify-center relative space-x-10 rounded-md md:p-10"
      ref={ref}
    >
      <div
        className="div relative flex items-start px-4 w-full h-full"
        ref={scope}
      >
        <div className="w-full h-full snap-y flex flex-col gap-10">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="w-full flex flex-col items-center justify-center py-5 snap-start "
            >
              <div className="flex flex-col lg:flex-row justify-center items-center w-full md:gap-10 ">
                <div className="flex flex-col gap-2 lg:w-full ">
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-2xl font-bold text-lightBlue-300 cursor-pointer "
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
                    className="text-md md:text-xl text-slate-300 max-w-sm mt-10 mb-5 md:mb-none "
                  >
                    {item.description}
                  </motion.p>
                </div>

                <div className="flex flex-col justify-start flex-wrap h-full w-full md:w-[400px]  gap-3">
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-xl md:text-2xl font-bold text-white"
                  >
                    My Tools
                  </motion.h2>
                  <div className="flex flex-row justify-start flex-wrap  md:h-fit gap-3 ">
                    {item.tools?.map((tool) => (
                      <div
                        className="bg-darkBlue-400 shadow-md text-white rounded-lg px-2 py-1 text-sm"
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
          <div className="h-[600px]" />
        </div>
      </div>
    </motion.div>
  );
};
