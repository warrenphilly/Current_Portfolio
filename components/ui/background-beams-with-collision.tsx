"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect, useCallback,useMemo } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const generateRandomBeam = () => ({
    initialX: Math.random() * 2500, // Spread across 2500px width
    duration: Math.random() * 1.5 + 0.5/10, // Duration between 0.5 and 2 seconds
    repeatDelay: Math.random() * 1, // Random delay between 0 and 1 second
    delay: Math.random() * 2, // Initial delay between 0 and 2 seconds
    className: `h-${Math.floor(Math.random() * 20) + 4}`, // Random height between h-4 and h-24
  });

  const beams = Array.from({ length: 10 }, generateRandomBeam);

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-full bg-gradient-to-b from-neutral-950 to-neutral-800 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
    >
      <LightningEffect />
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`beam-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute top-[60%] bg-neutral-100 w-screen inset-x-0 pointer-events-none "
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: "-200px",
          translateX: beamOptions.initialX || "0px",
        }}
        variants={{
          animate: {
            translateY: "1800px",
            translateX: beamOptions.initialX || "0px",
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-blue-600 via-blue-300 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-blue-200 to-transparent blur-sm"
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-blue-700 to-blue-200"
        />
      ))}
    </div>
  );
};

const LightningEffect = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  const generateLightningPath = useCallback(() => {
    const startX = Math.random() * 2000; // Spread across 2000px width
    let path = `M ${startX} 0`; // Always start from the top (y = 0)
    let x = startX;
    let y = 0;
    for (let i = 0; i < 5; i++) {
      x += Math.random() * 200 - 100; // Move left or right
      y += Math.random() * 200; // Always move downwards
      path += ` L ${x} ${y}`;
    }
    return path;
  }, []);

  const lightningPaths = useMemo(() => {
    return Array.from({ length: 3 }, () => generateLightningPath());
  }, [generateLightningPath]);

  const triggerLightning = useCallback(() => {
    setIsFlashing(true);
    setTimeout(() => setIsFlashing(false), 200);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (Math.random() < 0.6) { // 60% chance of lightning every 2 seconds
        triggerLightning();
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [triggerLightning]);

  return (
    <>
    <motion.div
      className="absolute inset-0 bg-white pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: isFlashing ?0.6 : 0 }}
      transition={{ duration: 0.1 }}
    />
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 2000 1000"
      initial={{ opacity: 0 }}
      animate={{ opacity: isFlashing ? 1 : 0 }}
      transition={{ duration: 0.1 }}
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
    </>
  );
};
