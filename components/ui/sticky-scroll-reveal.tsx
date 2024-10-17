"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (ref.current && itemsRef.current.length === cardLength) {
      const containerRect = ref.current.getBoundingClientRect();
      const activeIndex = itemsRef.current.findIndex((item) => {
        if (item) {
          const rect = item.getBoundingClientRect();
          return rect.top <= containerRect.top && rect.bottom > containerRect.top;
        }
        return false;
      });
      if (activeIndex !== -1 && activeIndex !== activeCard) {
        setActiveCard(activeIndex);
      }
    }
  });

  const backgroundColors = [
   ,
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const handleTitleClick = (index: number) => {
    if (ref.current && itemsRef.current[index]) {
      const containerRect = ref.current.getBoundingClientRect();
      const itemRect = itemsRef.current[index]!.getBoundingClientRect();
      const scrollTop = ref.current.scrollTop + itemRect.top - containerRect.top;
      ref.current.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
    setActiveCard(index);
  };

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-full w-full h-96 overflow-y-auto flex justify-center space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div w-full relative flex items-start px-4">
        <div className="flex flex-col gap-24 w-full">
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className=""
              ref={el => itemsRef.current[index] = el}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold cursor-pointer"
                onClick={() => handleTitleClick(index)}
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
                className="text-kg  mt-10"
              >
                {item.description}
              </motion.p>
              <div className="my-2 flex md:hidden">
              {item.content}
              </div>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
       
        className={cn(
          "hidden lg:block h-96 w-[500px] rounded-md  sticky top-0 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};



