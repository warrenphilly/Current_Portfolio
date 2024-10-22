"use client";

import { useRef } from "react";
import Hero from "@/components/Hero";
import { BentoSection } from "@/components/bentoSection";
import DynamicBackground from "@/components/DynamicBackground";
import Header from "@/components/Header";

import Lightning from "@/components/Lightning";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full">
      <DynamicBackground />
      <div
        ref={containerRef}
        className="w-full h-screen md:overflow-y-auto snap-y snap-mandatory relative z-10"
      >
        <section className="w-full h-screen snap-start snap-always">
         
          <Hero />
        </section>

        <section className="w-full h-screen snap-start snap-always md:flex items-center justify-center  md:pt-24">
          <BentoSection />
        
        </section>
      </div>
      <Lightning />
     
    </div>
  );
}
