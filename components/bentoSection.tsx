"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function BentoSection() {
  return (
    
    <div id="bento-section" className="w-full h-screen flex justify-center items-center ">
      <div className="w-full max-w-7xl p-8    rounded-xl bg-white/30 backdrop-blur-lg shadow-lg m-10">
        <BentoGrid className="mx-auto  gap-2  ">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full rounded-xl bg-white/40 backdrop-blur-lg rounded-lg h-[280px] w-[280px] min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
     <Image src="/assets/images/user.png" alt="avatar" height="100" width="100" className=" h-full w-full rounded-xl" />
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };

  const colors = [
    "bg-green-200 dark:bg-green-800",
    "bg-yellow-200 dark:bg-yellow-800",
    "bg-blue-200 dark:bg-blue-800",
    "bg-red-500 dark:bg-red-800",
    "bg-yellow-200 dark:bg-yellow-800",
    "bg-green-200 dark:bg-green-800",
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-grey-600   flex-col space-y-2"
    ><div className=" p-2 bg-gray-500 rounded-lg">
      {colors.map((color, i) => (
        <motion.div
          key={"skeleton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className={`flex flex-row rounded-full my-1  dark:border-white/[0.2] p-2 items-center space-x-2 ${color} w-full h-4`}
        >
         
        </motion.div>
      ))}
       </div>
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex bg-white/80 backdrop-blur-lg rounded-lg flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1  bg-white/40 backdrop-blur-lg rounded-lg w-full h-[340px]  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-[#fafafa] shadow-lg p-2 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="/assets/images/riftyProject.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-full w-full"
        />
        
        <p className="border  w-full bg-warm-600 text-white dark:bg-red-900/20 text-gray-700 text-lg rounded-lg">
          Rifty.co
        </p>
      </motion.div>
      
      <motion.div className="h-full bg-[#fafafa] relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
     
        <Image
          src="/assets/images/riftyProject.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-full w-full"
        />
        
        <p className="border  w-full bg-warm-600 text-white dark:bg-red-900/20 text-gray-700 text-lg rounded-lg">
          Rifty.co
        </p>
      </motion.div>
      
      <motion.div
        variants={second}
        className="h-full w-1/3  bg-[#fafafa] rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
   
        <Image
          src="/assets/images/riftyProject.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-full w-full"
        />
        
        <p className="border  w-full bg-warm-600 text-white dark:bg-red-900/20 text-gray-700 text-lg rounded-lg">
          Rifty.co
        </p>
      </motion.div>








    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex bg-white/40 backdrop-blur-lg rounded-lg flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="/public/assets/images/user.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "About me",
    description: (
      <span className="text-lg">
        Discover my lore, learn my secrets...
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1 row-span-2 h-[500px]",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Skills",
    description: (
      <span className="text-lg">
        Dive into the many mystic arts I have trained in. Take a peep into my tool box.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Get in touch",
    description: (
      <span className="text-md">
        Like what you see? Give me a holler. Lets work together.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,

  },
  {
    title: "My Projects",
    description: (
      <span className="text-lg">
        I know your curious about what I have been up to. Here's some of my work.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-3 row-span-2 h-[500px]",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "My Experience",
    description: (
      <span className="text-sm">
        Here's the proof that I know what I'm doing.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1 h-[300px]",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
