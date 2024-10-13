"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

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
            className="absolute dark:bg-black bg-white w-full h-full rounded-3xl shadow-xl border border-neutral-200 dark:border-white/[0.1] shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col md:flex-row gap-5 p-8"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <div className="relative w-full h-fit mb-4 border border-neutral-200 dark:border-white/[0.1] rounded-lg shadow-xl">
              <Image
                src={card.image}
                alt={card.title}
                width={300}
                height={300}
                objectFit="fit"
                className="rounded-lg w-full"
              />
              </div>
              <div>
            <h2 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-100">
              {card.title}
            </h2>
            <div className="flex-grow font-normal text-neutral-700 dark:text-neutral-200 w-56">
              {card.content}
                 </div>
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
