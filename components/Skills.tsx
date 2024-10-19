"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


// ... existing imports ...

const content = [
  {
    title: "Fullstack Development",
    tools: [
      "Nextjs",
      "mongodb",
      "Shadcn",
      "tailwindcss",
      "supabase",
      "Vercel",
     "Remix",
      "Docker",
      "react",
      "Express",
      "AWS",
      "vite",
      "PostgreSQL",
      "Prisma",
    ],
    description:
      "I thrive on building end-to-end solutions. Whether it's crafting responsive UIs with React, designing RESTful APIs with Node.js, or optimizing database queries, I enjoy the challenge of creating seamless user experiences. I've developed and deployed full-stack applications that handle thousands of daily users.",
    content: (
      <div>
        <h2 className="text-xl font-bold my-4">My Main Stack:</h2>
        <div className=" flex flex-row flex-wrap   justify-start items-start h-fit gap-2">
          {[
            "nextjs",
            "mongodb",
            "shadcn",
            "tailwindcss",
            "vercel",
            "docker",
            "AWS",
            "PostgreSQL",
            "Prisma",
          ].map((tool) => (
            <div
              key={tool}
              className="bg-darkBlue-600 text-lightBlue-300 px-2 py-1 rounded-md text-lg"
            >
              {tool}
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold my-4">Other tools i use:</h2>
        <div className=" flex flex-row flex-wrap   justify-start items-start h-fit gap-2">
          {[
            "Remix",
            "mongodb Atlas",
            "supabase",
            "React",
            "Express",
            "Vite",
          ].map((tool) => (
            <div
              key={tool}
              className="bg-darkBlue-600 text-lightBlue-300 px-2 py-1 rounded-md text-lg"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "AI Development",
    tools: [
      "pytorch",
      "tensorflow",
      "numpy",
      "YOLO( Object Detection )",
      "openai( GPTs, Whisper, DALL-E,tts )",
     
    ],
    description:
      "I'm passionate about pushing the boundaries of AI. From training YOLO models for object detection to fine-tuning language models like GPT, I love diving into the cutting edge of machine learning. I've implemented computer vision solutions for real-time tracking and used NLP for sentiment analysis in production environments.",
    content: (
      <div>
        <h2 className="text-xl font-bold mb-4">Tools i use:</h2>
        <div className=" flex flex-row flex-wrap   justify-start items-start h-fit gap-2">
          {[
            "tensorflow",
            "pytorch",
            "huggingface",
            "openai( GPTs, Whisper, DALL-E,tts )",
            "numpy",
            "YOLO( Object Detection )",
            "SAM( Segment Anything Model )",

            "keras",
          ].map((tool) => (
            <div
              key={tool}
              className="bg-darkBlue-600 text-lightBlue-300 px-2 py-1 rounded-md text-lg"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    title: "Frontend Development",
    tools: [
      "react",
      "vue",
      "html5",
      "css3",
      "javascript",
      "typescript",
      "tailwindcss",
    ],
    description:
      "Creating intuitive and visually appealing interfaces is my forte. I love turning design mockups into pixel-perfect, responsive websites. From optimizing load times to ensuring cross-browser compatibility, I'm all about crafting smooth user experiences. And yes, I can center a div without breaking a sweat!",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Tools i use:</h2>
        <div className=" flex flex-row flex-wrap   justify-start items-start h-fit gap-2">
          {[
            "react",
            "vue",
            "html5",
            "css3",
            "javascript",
            "typescript",
            "tailwindcss",
          ].map((tool) => (
            <div
              key={tool}
              className="bg-darkBlue-600 text-lightBlue-300 px-2 py-1 rounded-md text-xl"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Backend Development",
    tools: ["nodejs", "python(django)", "java(spring boot)", "mongodb"],
    description:
      "I'm the architect behind the scenes, designing robust server-side solutions. From building scalable microservices to optimizing database queries, I ensure the backend runs like a well-oiled machine. I've implemented complex business logic, integrated third-party APIs, and optimized systems to handle high-traffic loads.",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Tools i use:</h2>
        <div className=" flex flex-row flex-wrap   justify-start items-start h-fit gap-2">
          {["nodejs", "python(django)", "java(spring boot)", "mongodb"].map(
            (tool) => (
              <div
                key={tool}
                className="bg-darkBlue-600 text-lightBlue-300 px-2 py-1 rounded-md text-xl"
              >
                {tool}
              </div>
            )
          )}
        </div>
      </div>
    ),
  },
  {
    title: "Mobile Development",
    tools: ["react-native", "swift", "flutter"],
    description:
      "I bring ideas to life in the palm of your hand. With experience in both native and cross-platform development, I create mobile apps that are both functional and delightful to use. From integrating device features to ensuring smooth performance across different screen sizes, I love the unique challenges mobile development brings.",
    content: (
      <div>
        <h2 className="text-2xl font-bold mb-4">Tools i use:</h2>
        <div className=" flex flex-row flex-wrap   justify-start items-start h-fit gap-2">
          {["react-native", "swift", "flutter"].map((tech) => (
            <div
              key={tech}
              className="bg-darkBlue-600 text-lightBlue-300 px-2 py-1 rounded-md text-xl"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

// ... existing Skills component ...

export function Skills() {
  return (
    <div className="p-4 lg:p-10 min-h-[1000px] overflow-hidden text-lightBlue-200 w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
