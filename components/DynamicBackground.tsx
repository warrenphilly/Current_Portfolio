import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const generateBlobPath = () => {
  const numberOfPoints = 50;
  let path = "M";
  for (let i = 0; i < numberOfPoints; i++) {
    const angle = (i / numberOfPoints) * Math.PI * 2;
    const radius = 40 + Math.random() * 10;
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;
    path += `${x},${y} `;
  }
  return path + "Z";
};

const DynamicBackground: React.FC = () => {
  const [startPath, setStartPath] = useState(generateBlobPath());
  const [endPath, setEndPath] = useState(generateBlobPath());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartPath(endPath);
      setEndPath(generateBlobPath());
    }, 7000);
    return () => clearInterval(intervalId);
  }, [endPath]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B0000" />
            <stop offset="50%" stopColor="#DC143C" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <g filter="url(#goo)">
          <motion.path
            d={startPath}
            fill="url(#blob-gradient)"
            animate={{ d: endPath }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </g>
      </svg>

      {/* Frosted glass effect */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/20" />
    </div>
  );
};

export default DynamicBackground;
