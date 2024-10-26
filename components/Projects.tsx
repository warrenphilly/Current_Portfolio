"use client";
import { CardStack } from "@/components/ui/card-stack";


export function Projects() {
  return (
    <div className="lg:min-h-screen w-full flex items-center justify-center px-4 lg:py-10">
      <CardStack items={PROJECTS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a project description


const PROJECTS = [
  {
    id: 0,
    title: "Rifty.co | Peer-to-Peer Rental Platform",
    image: "/assets/images/RiftyProject.png",
    link: "https://rifty.co",
    github: "https://github.com/rifty-co",
    tools: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Stripe Connect",
      "MongoDB Atlas",
      "Vercel",
      "Docker",
      "AWS",
      "Clerk"
    ],
    description: "Rifty is my magnum opus - a production-ready P2P rental marketplace that connects communities. Built with scalability in mind, it features secure payments, authentication, and cloud storage, all wrapped in a polished, responsive interface ready for startup deployment.",
  },
  {
    id: 1,
    title: "Coming Soon...",
    image: "/assets/images/coming-soon.png", // Add a placeholder image
    link: "#",
    github: "#",
    tools: ["To", "Be", "Announced"],
    description: "I'm working on something crazy this time, you'll see! 🚀 something wicked this way comes...",
  },

];
