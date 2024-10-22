"use client";
import React, { useRef, useEffect } from "react";
import { useMotionValueEvent, useScroll,  } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  // const [scope] = useAnimate();
  const { scrollYProgress } = useScroll({
    container: containerRef,
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
    if (containerRef.current) {
      const containerHeight = containerRef.current.scrollHeight - containerRef.current.clientHeight;
      const scrollPosition = (index / (cardLength - 1)) * containerHeight;
      containerRef.current.scrollTo({
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

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard, cardLength]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-full h-screen overflow-hidden"
    >
      <div
        ref={containerRef}
        className="h-screen w-full overflow-y-auto snap-y snap-mandatory py-[500px]"
      >
        {content.map((item, index) => (
          <div
            key={item.title + index}
            className="w-full  lg:h-[300px] snap-start snap-always flex items-start justify-center py-10 px-4"
          >
            <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-center md:justify-between items-start gap-10">
              <div className="flex flex-col gap-4 lg:w-1/2">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-xl md:text-3xl font-bold text-lightBlue-300 cursor-pointer"
                  onClick={() => handleCardClick(index)}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-md md:text-xl text-slate-300"
                >
                  {item.description}
                </motion.p>
              </div>

              <div className="lg:w-1/4">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-lg md:text-2xl font-bold text-white mb-4"
                >
                  My Tools
                </motion.h3>
                <div className="flex flex-wrap gap-3">
                  {item.tools?.map((tool) => (
                    <div
                      key={tool}
                      className="bg-darkBlue-400 shadow-md text-white rounded-lg px-3 py-1 text-sm"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
