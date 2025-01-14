"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}

const Lightning = () => {
  const [isFlashing, setIsFlashing] = useState(false);
  const { width, height } = useWindowSize();

  const generateLightningPath = useCallback(() => {
    if (typeof window === 'undefined') return '';
    const startX = Math.random() * width;
    let path = `M ${startX} 0`;
    let x = startX;
    let y = 0;
    const segments = 8;
    const heightPerSegment = height / segments;

    for (let i = 0; i < segments; i++) {
      x += (Math.random() - 0.5) * 200;
      y += heightPerSegment;
      path += ` L ${x} ${y}`;
    }
    return path;
  }, [width, height]);

  const lightningPaths = useMemo(() => {
    return Array.from({ length: 3 }, () => generateLightningPath());
  }, [generateLightningPath]);

  const triggerLightning = useCallback(() => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 200);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (Math.random() < 0.5) {
        triggerLightning();
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [triggerLightning]);

  if (typeof window === 'undefined') return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-lightBlue-100 h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isFlashing ? 0.6 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox={`0 0 ${width} ${height}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isFlashing ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {lightningPaths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

export default Lightning;