"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Card = {
  id: number;
  title: string;
  image: string;
  content: React.ReactNode;
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
      newArray.push(newArray.shift()!);
      return newArray;
    });
  };

  const handleNext = () => {
    setIsAutoRotating(false);
    setCards((prevCards: Card[]) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  };

  return (
    <div className="relative h-full w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-[#1B3F59] w-full h-full rounded-3xl shadow-xl flex flex-col p-8"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <h2 className="text-xl font-bold mb-4 text-lightBlue-300">
              {card.title}
            </h2>
            <div className="relative flex-grow mb-4 rounded-xl overflow-hidden pt-[20px]">
              <div className=" flex items-center w-fit bg-green-500 justify-center pt-[20px] rounded-xl mt-[20px]">
                
                 <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-xl shadow-2xl" 
                />
              </div>
            </div>
            <div className="w-full  rounded-lg l p-4 ">
              {card.content}
            </div>
          </motion.div>
        );
      })}

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full bg-white dark:bg-black p-2 rounded-full shadow-md"
        onClick={handlePrev}
        aria-label="Previous project"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full bg-white dark:bg-black p-2 rounded-full shadow-md"
        onClick={handleNext}
        aria-label="Next project"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
};
