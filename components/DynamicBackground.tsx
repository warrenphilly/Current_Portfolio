import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const RAINDROP_COUNT = 100;

interface Raindrop {
  id: number;
  size: number;
  opacity: number;
  x: number;
  y: number;
  speed: number;
}

const generateRaindrops = (): Raindrop[] => {
  return Array.from({ length: RAINDROP_COUNT }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    x: Math.random() * 100,
    y: Math.random() * -100,
    speed: Math.random() * 0.5 + 0.5,
  }));
};

const DynamicBackground: React.FC = () => {
  const [raindrops, setRaindrops] = useState<Raindrop[]>(generateRaindrops());
  const flashControls = useAnimation();

  useEffect(() => {
    const rainInterval = setInterval(() => {
      setRaindrops((prevDrops) =>
        prevDrops.map((drop) => ({
          ...drop,
          y: drop.y > 100 ? Math.random() * -10 : drop.y + drop.speed,
        }))
      );
    }, 50);

    const lightningInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        flashControls.start({
          opacity: [0, 1, 0],
          transition: { duration: 0.5, times: [0, 0.1, 1] },
        });
      }
    }, 1000);

    return () => {
      clearInterval(rainInterval);
      clearInterval(lightningInterval);
    };
  }, [flashControls]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-navy-blue">
      {raindrops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute rounded-full bg-sky-200"
          style={{
            width: drop.size,
            height: drop.size * 3,
            left: `${drop.x}%`,
            opacity: drop.opacity,
          }}
          animate={{ y: ['0%', '100%'] }}
          transition={{
            duration: 100 / drop.speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        animate={flashControls}
        initial={{ opacity: 0 }}
      />
    </div>
  );
};

export default DynamicBackground;
