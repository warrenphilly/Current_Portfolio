"use client";

import { useRef } from "react";
import Hero from "@/components/Hero";
import { BentoSection } from "@/components/bentoSection";
import DynamicBackground from "@/components/DynamicBackground";


import Lightning from "@/components/Lightning";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full h-full overflow-hidden">
      <DynamicBackground />
      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-auto snap-y snap-mandatory relative z-10"
      >
        <section className="w-full h-screen snap-start snap-always ">
          <Hero />
        </section>

        <section className="w-full h-full lg:max-h-[95vh]   snap-start snap-always  overflow-y-scroll sm:overflow-y-hidden pt-24 ">
          <BentoSection />
         
        </section>
      </div>
      <Lightning />
    </div>
  );
}
