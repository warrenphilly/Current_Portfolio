"use client";
import { CardStack } from "@/components/ui/card-stack";


export function Projects() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-10">
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
    description:"Ahhh Yes, My Magnum Opus. Rifty is a peer-to-peer rental platform that allows users to rent and share their own items with others in their community.  My most ambitious and complete project to date, This is a fully production ready full stack web application that is almost ready for startup use. Built will scalability in mind, this application is designed to be easily scalable to meet the needs of a growing user base. features fully functioning marketplace payment system, user authentication, file storage,database storage, and a fully dynamic frontend that looks great everywhere. ",

    
   
  },
 
];
