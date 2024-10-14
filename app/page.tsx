"use client";

import { useRef } from "react";
import Hero from "@/components/Hero";
import { BentoSection } from "@/components/bentoSection";
// import DynamicBackground from "@/components/DynamicBackground";
// import { AnimatedBackground } from 'animated-backgrounds' ;
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full  ">
     <BackgroundBeamsWithCollision className="h-screen w-screen">
     <div
        ref={containerRef}
        className="w-full h-screen md:overflow-y-auto snap-y snap-mandatory relative z-10"
      >
        <section className="w-full h-screen snap-start snap-always">
          <Hero />
        </section>

        <section className="w-full h-screen snap-start snap-always">
          <BentoSection />
        </section>
      </div>
    </BackgroundBeamsWithCollision>
      
    </div>
  );
}
