"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import { BentoSection } from "@/components/bentoSection";
import { useSnapScroll } from "@/hooks/useSnapScroll";
import { motion } from "framer-motion";


export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const { currentSection } = useSnapScroll(containerRef);


  return (

    <div>
      <div
        ref={containerRef}
        className="w-full h-screen overflow-y-auto snap-y snap-mandatory bg-gradient-to-r from-white to-warm-300"
      >
        <section className="min-h-screen snap-start snap-always">
          <Hero />
        </section>

        <section className="w-full h-screen snap-start snap-always">
          <BentoSection />
        </section>
        

        
      </div>
    </div>
  );
}
