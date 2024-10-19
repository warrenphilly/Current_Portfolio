"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <div className="h-full flex flex-col items-center justify-center w-full ">
      <CardStack items={PROJECTS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a project description
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const PROJECTS = [
  {
    id: 0,
    title: "Project Rifty",
    image: "/assets/images/riftyProject.png",
    content: (
      <div className="flex flex-col gap-4 ">
      <p className="text-xl">
        Rifty is a cutting-edge web application that
        revolutionizes the way users interact with digital content. It features
         seamless user interface and powerful backend
        capabilities.
      </p>
      <div className="flex flex-row  gap-4 items-center justify-between w-full ">
      <button className="bg-[#111827]/30 text-lightBlue-300 px-4 py-2 rounded-lg">
           Demo
        </button>
       <p>
       Tools used: 
     </p>
     
     </div>
     </div>
    ),
  },
  {
    id: 1,
    title: "AI Chatbot",
    image: "/assets/images/chatbotProject.jpg",
    content: (
      <p>
        An advanced AI-powered chatbot designed to
        provide intelligent responses and assist users with various tasks. It
        utilizes
        natural language processing for enhanced
        communication.
      </p>
    ),
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: "/assets/images/ecommerceProject.jpg",
    content: (
      <p>
        A robust <Highlight>e-commerce solution</Highlight> built with
        scalability in mind. It offers features like{" "}
        <Highlight>secure payments</Highlight>, inventory management, and a
        responsive design for optimal user experience across devices.
      </p>
    ),
  },
];
