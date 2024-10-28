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
    title: "Warren Real Estate - A Landing Page for a Real Estate Agency",
    image: "/assets/images/WarrenRealEstate.png", // Add a placeholder image
    link: "https://real-estate-app-one-nu.vercel.app",
    github: "https://github.com/warrenphilly",
    tools: ["NextJs", "TailwindCSS", "Typescript","Vercel"],
    description: " This is a landing page for a real estate agency. It is built with Next.js and TailwindCSS. It is a simple and responsive landing page that showcases the agency's services and properties.",
  },
  {
    id: 2,
    title: "L.E.V.I | GPT powered Ai voice assistant with a charming british wit, ",
    image: "/assets/images/Levi.png", // Add a placeholder image
    link: "https://levi-live.vercel.app",
    github: "https://github.com/warrenphilly/levi-live.git",
    tools: ["NextJs", "TailwindCSS", "Typescript","Vercel","OpenAI","Speech-to-text API"],
    description: "L.E.V.I is a GPT powered Ai voice assistant with a charming british wit. It is built with Next.js and TailwindCSS and run's openai's whisper model to convert text to speech and Speech-to-text API to convert speech to text. And GPT-4o to power the voice assistant.Warning-He's kind of a jerk. (Currently under maintenance)",
  },
  {
    id: 3,
    title: "Coming Soon...",
    image: "/assets/images/coming-soon.png", // Add a placeholder image
    link: "#",
    github: "#",
    tools: ["To", "Be", "Announced"],
    description: "I'm working on something crazy this time, you'll see! 🚀 something wicked this way comes...",
  },

];
