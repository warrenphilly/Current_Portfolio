import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";



const DynamicBackground: React.FC = () => {




  return (
    <BackgroundBeamsWithCollision className=" fixed w-screen h-screen">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
       

        {/* Frosted glass effect */}
        <div className="" />
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default DynamicBackground;
