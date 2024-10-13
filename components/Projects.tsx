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
      <p>
        Rifty is a <Highlight>cutting-edge web application</Highlight> that revolutionizes 
        the way users interact with digital content. It features a 
        <Highlight>seamless user interface</Highlight> and powerful backend capabilities.
      </p>
    ),
  },
  {
    id: 1,
    title: "AI Chatbot",
    image: "/assets/images/chatbotProject.jpg",
    content: (
      <p>
        An advanced <Highlight>AI-powered chatbot</Highlight> designed to provide 
        intelligent responses and assist users with various tasks. It utilizes 
        <Highlight>natural language processing</Highlight> for enhanced communication.
      </p>
    ),
  },
  {
    id: 2,
    title: "E-commerce Platform",
    image: "/assets/images/ecommerceProject.jpg",
    content: (
      <p>
        A robust <Highlight>e-commerce solution</Highlight> built with scalability in mind. 
        It offers features like <Highlight>secure payments</Highlight>, inventory management, 
        and a responsive design for optimal user experience across devices.
      </p>
    ),
  },
];
