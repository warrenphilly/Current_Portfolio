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
import Footer from "./Footer";

export function BentoSection() {
  return (
    <div id="bento-section" className="w-full md:h-full flex flex-col justify-center lg:justify-between  items-center">
      <div className="w-full px-5 md:px-0  max-w-lg md:max-w-7xl pb-4 md:pb-0 ">
        <BentoGrid className="mx-auto gap-4 sm:gap-2  ">
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
      <Footer />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full  md:rounded-lg h-full backdrop-blur-lg  min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 items-center justify-end "
    >
      <Image
        src="/assets/images/avatarPeaceful.png"
        alt="avatar"
        height="200"
        width="200"
        className=" md:h-fit md:w-fit border-neutral-400 items-center justify-center pl-5 ml-2 rounded-full bg-[#1C2934] "
      />
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
      className="flex flex-1 w-full h-full min-h-[6rem]  flex-col space-y-2"
    >
      <div className=" p-2 bg-[#1C2934] min-h-[200px] rounded-lg">
        {colors.map((color, i) => (
          <motion.div
            key={"skeleton-two" + i}
            variants={variants}
            style={{
              maxWidth: Math.random() * (100 - 40) + 40 + "%",
            }}
            className={`flex flex-row rounded-full my-1  dark:border-white/[0.2] p-2 items-center space-x-2 ${color} w-full h-4`}
          ></motion.div>
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
      className="flex  bg-red-500 backdrop-blur-lg rounded-lg flex-1 w-full min-h-[12rem]  dark:bg-dot-white/[0.2]  bg-dot-black/[0.2] flex-col space-y-2 mt25"
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
      className="flex flex-1  bg-[#1C2934] backdrop-blur-lg rounded-lg w-full h-[300px] lg:h-[340px]  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row "
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-[#fafafa] shadow-lg p-2 dark:bg-black dark:border-white/[0.1] border border-neutral-200 hidden lg:flex flex-col items-center justify-center"
      >
        <Image
          src="/assets/images/RiftyProject.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-full w-full "
        />

      
      </motion.div>

      <motion.div className="h-full w-full lg:w-1/3 relative z-20 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="/assets/images/RiftyProject.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-full w-full"
        />

      </motion.div>

      <motion.div
        variants={second}
        className="h-full w-1/3  rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 hidden lg:flex flex-col items-center justify-center"
      >
        <Image
          src="/assets/images/RiftyProject.png"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-lg h-full w-full"
        />

     
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  // const variants = {
  //   initial: {
  //     x: 0,
  //   },
  //   animate: {
  //     x: 10,
  //     rotate: 5,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };
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
      className="flex bg-[#1C2934] backdrop-blur-lg rounded-lg flex-1 w-full h-full min-h-[200px] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 justify-center p-4"
    >
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border text-start border-neutral-100 dark:border-white/[0.2] p-2 items-start justify-start space-x-2 w-[90%] mr-auto bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0 " />
        <p className="text-xs text-neutral-500">
          Hey, I found your super cool website and i wanna work with you.
        </p>
      </motion.div>

      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-7/8 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">You had me at hey</p>
        <div className="flex flex-1 w-7  rounded-full h-7 bg-gray-400 backdrop-blur-lg  items-center justify-center  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col  ">
          <Image
            src="/assets/images/avatarPeaceful.png"
            alt="avatar"
            height="100"
            width="100"
            className=" h-[80%] w-[80%] border-neutral-400  "
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "About me",
    description: (
      <span className="text-lg">Discover my lore, learn my secrets...</span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1 md:row-span-2 md:h-[500px] ",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Skills",
    description: (
      <span className="text-lg">
        Dive into the many mystic arts I have trained in. Take a peep into my
        tool box.
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
        I know you&apos;re curious about what I&apos;ve been up to. Here&apos;s
        some of my work.
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
        Here&apos;s the proof that I know what I&apos;m doing.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1 lg:h-[410px]",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
