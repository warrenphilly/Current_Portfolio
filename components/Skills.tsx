"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "C#",
    description: "Proficient in C# for building robust, scalable applications on the .NET framework.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--blue-500))] flex items-center justify-center text-white">
        C#
      </div>
    ),
  },
  {
    title: "Java",
    description: "Experienced in Java development for creating cross-platform applications and enterprise-level systems.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--orange-500))] flex items-center justify-center text-white">
        Java
      </div>
    ),
  },
  {
    title: "Python",
    description: "Skilled in Python for data analysis, scripting, and backend development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--yellow-500))] flex items-center justify-center text-white">
        Python
      </div>
    ),
  },
  {
    title: "C/C++",
    description: "Proficient in C and C++ for system-level programming and performance-critical applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--blue-400))] flex items-center justify-center text-white">
        C/C++
      </div>
    ),
  },
  {
    title: "SQL",
    description: "Experienced in SQL for efficient database management and complex query optimization.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        SQL
      </div>
    ),
  },
  {
    title: "MongoDB",
    description: "Skilled in MongoDB for designing and managing NoSQL databases in modern web applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--green-700))] flex items-center justify-center text-white">
        MongoDB
      </div>
    ),
  },
  {
    title: "JavaScript",
    description: "Expert in JavaScript for building interactive and dynamic web applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-400),var(--yellow-600))] flex items-center justify-center text-white">
        JavaScript
      </div>
    ),
  },
  {
    title: "TypeScript",
    description: "Proficient in TypeScript for developing large-scale, type-safe JavaScript applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--blue-700))] flex items-center justify-center text-white">
        TypeScript
      </div>
    ),
  },
  {
    title: "HTML/CSS",
    description: "Skilled in HTML and CSS for creating responsive, accessible, and visually appealing web interfaces.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--blue-500))] flex items-center justify-center text-white">
        HTML/CSS
      </div>
    ),
  },
  {
    title: "Node.js",
    description: "Proficient in Node.js for server-side JavaScript development and building scalable network applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--green-700))] flex items-center justify-center text-white">
        Node.js
      </div>
    ),
  },
  {
    title: "React Native",
    description: "Experienced in React Native for building cross-platform mobile applications with native performance.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-400),var(--blue-600))] flex items-center justify-center text-white">
        React Native
      </div>
    ),
  },

  {
    title: "NextJS",
    description: "Experienced in NextJS for building server-side rendered and statically generated React applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-700),var(--gray-900))] flex items-center justify-center text-white">
        NextJS
      </div>
    ),
  },
  {
    title: "Remix",
    description: "Proficient in Remix for creating fast, dynamic, and resilient web applications with React.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] flex items-center justify-center text-white">
        Remix
      </div>
    ),
  },

  {
    title: "ExpressJS",
    description: "Experienced in ExpressJS for building robust and scalable web applications and APIs with Node.js.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-600),var(--gray-800))] flex items-center justify-center text-white">
        ExpressJS
      </div>
    ),
  },
  {
    title: "Git",
    description: "Proficient in Git for version control, collaboration, and managing complex development workflows.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
        Git
      </div>
    ),
  },
  {
    title: "Docker",
    description: "Skilled in Docker for containerization, ensuring consistent development and deployment environments.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-400),var(--blue-600))] flex items-center justify-center text-white">
        Docker
      </div>
    ),
  },
  {
    title: "AWS",
    description: "Experienced in AWS cloud services for building and deploying scalable and resilient applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-400),var(--orange-600))] flex items-center justify-center text-white">
        AWS
      </div>
    ),
  },
  {
    title: "Azure",
    description: "Proficient in Microsoft Azure for cloud computing, including app services, databases, and DevOps.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--blue-700))] flex items-center justify-center text-white">
        Azure
      </div>
    ),
  },

  {
    title: "React",
    description: "Expert in React for building efficient, reusable, and maintainable user interfaces.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-400),var(--blue-500))] flex items-center justify-center text-white">
        React
      </div>
    ),
  },
  {
    title: "Vue.js",
    description: "Proficient in Vue.js for creating dynamic and responsive single-page applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-400),var(--green-600))] flex items-center justify-center text-white">
        Vue.js
      </div>
    ),
  },
  {
    title: "TensorflowJS",
    description: "Experienced in TensorflowJS for implementing machine learning models in web applications.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--orange-700))] flex items-center justify-center text-white">
        TensorflowJS
      </div>
    ),
  },
  {
    title: "TailwindCSS",
    description: "Skilled in TailwindCSS for rapid UI development with utility-first CSS framework.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-400),var(--blue-500))] flex items-center justify-center text-white">
        TailwindCSS
      </div>
    ),
  },

  
];

export function Skills() {
  return (
    <div className="p-10 h-screen overflow-y-hidden text-lightBlue-200">
      <StickyScroll content={content} />
    </div>
  );
}
