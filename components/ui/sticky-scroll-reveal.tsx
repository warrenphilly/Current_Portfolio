"use client";
import React, { useRef, useEffect } from "react";
import { useMotionValueEvent, useScroll,  } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  // Reset scroll and active card on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
      setActiveCard(0);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Calculate normalized scroll position
    const scrollFraction = Math.max(0, Math.min(1, latest));
    
    // Calculate which section we're in
    const sectionIndex = Math.floor(scrollFraction * (cardLength - 0.1));
    
    // Only update if the section actually changed
    if (sectionIndex !== activeCard) {
      setActiveCard(Math.min(sectionIndex, cardLength - 1));
    }
  });

  const backgroundColors = [
    "var(--slate-900)/[0.9]",
    "var(--black)/[0.9]",
    "var(--neutral-900)/[0.9]",
  ];

  const handleCardClick = (index: number) => {
    if (!containerRef.current) return;
    
    // Calculate exact scroll position for each section
    const totalScroll = containerRef.current.scrollHeight - containerRef.current.clientHeight;
    const sectionHeight = totalScroll / (cardLength - 1);
    const targetScroll = index * sectionHeight;
    
    containerRef.current.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
    
    setActiveCard(index);
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="w-full h-full relative pb-10"
    >
      <div
        ref={containerRef}
        className="h-full w-full overflow-y-auto "
        style={{ scrollBehavior: 'smooth' }}
      >
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            animate={{ 
              opacity: activeCard === index ? 1 : 0.3,
              scale: activeCard === index ? 1 : 0.95
            }}
            transition={{ duration: 0.3 }}
            className={cn(
              "w-full min-h-[300px] flex items-start justify-center py-6 px-4 my-5 max-w-6xl",
              "relative isolate overflow-hidden",
            )}
          >
            {/* Frosted glass background */}
            <div className="absolute inset-0 -z-10">
              <div 
                className={cn(
                  "absolute inset-0 bg-[#232a2f]/80 ",
                  "backdrop-blur-md backdrop-saturate-150",
                  "border border-neutral-400/30",
                  "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                  "rounded-2xl"
                )}
              />
            </div>

            {/* Content container with additional glass effect */}
            <div className="max-w-5xl w-full flex flex-col lg:flex-row justify-center md:justify-between items-start gap-6 relative z-10">
              <div className="flex flex-col gap-3 lg:w-1/2">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-xl md:text-2xl font-bold text-lightBlue-300 cursor-pointer hover:text-lightBlue-200 transition-colors"
                  onClick={() => handleCardClick(index)}
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-sm md:text-lg text-slate-300/90"
                >
                  {item.description}
                </motion.p>
              </div>

              <div className="lg:w-1/3">
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-md md:text-xl font-bold text-white/90 mb-3"
                >
                  My Tools
                </motion.h3>
                <div className="flex flex-wrap gap-2">
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
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
