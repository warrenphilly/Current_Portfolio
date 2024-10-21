"use client";
import { CardStack } from "@/components/ui/card-stack";


export function Projects() {
  return (
    <div className="h-full flex flex-col items-center justify-center w-full ">
      <CardStack items={PROJECTS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a project description


const PROJECTS = [
  {
    id: 0,
    title: "Rifty.co | Peer-to-Peer Rental Platform",
    image: "/assets/images/riftyProject.png",
    link: "https://rifty.co", 
    tools: ["Next.js", "Tailwind CSS", "Shadcn UI", "Stripe Connect", "MongoDB Atlas", "Vercel", "Docker", "AWS", "Clerk"],
    github: "https://github.com/rifty-co",
    description:"Rifty is a cutting-edge web application that revolutionizes the way users interact with digital content. It features seamless user interface and powerful backend capabilities.",

    
   
  },
  {
    id: 1,
    title: "Rifty.co | Peer-to-Peer Rental Platform",
    image: "/assets/images/riftyProject.png",
    link: "https://rifty.co", 
    tools: ["Next.js", "Tailwind CSS", "Shadcn UI", "Stripe Connect", "MongoDB Atlas", "Vercel", "Docker", "AWS", "Clerk"],
    github: "https://github.com/rifty-co",
    description:"Rifty is a cutting-edge web application that revolutionizes the way users interact with digital content. It features seamless user interface and powerful backend capabilities.",
   
  },
  {
    id: 2,
    title: "Rifty.co | Peer-to-Peer Rental Platform",
    image: "/assets/images/riftyProject.png",
    link: "https://rifty.co", 
    tools: ["Next.js", "Tailwind CSS", "Shadcn UI", "Stripe Connect", "MongoDB Atlas", "Vercel", "Docker", "AWS", "Clerk"],
    github: "https://github.com/rifty-co",
    description:"Rifty is a cutting-edge web application that revolutionizes the way users interact with digital content. It features seamless user interface and powerful backend capabilities.",
  
  },
];
