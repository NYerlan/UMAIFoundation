import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface RollingNumberProps {
  target: number;
}

export default function RollingNumber({ target }: RollingNumberProps) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    let currentNumber = 0;
    let observer: IntersectionObserver | null = null;

    const animateNumber = () => {
      if (currentNumber < target) {
        currentNumber += Math.ceil((target - currentNumber) * 0.1);
        setCurrent(Math.min(currentNumber, target));
        animationFrame = requestAnimationFrame(animateNumber);
      } else {
        setIsCounting(false);
      }
    };

    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsCounting(true);
            animateNumber();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [target]);

  return (
    <div ref={containerRef} className="relative inline-block">
      <motion.span
        initial={{ y: 20, opacity: 0 }}
        animate={isCounting ? {
          y: 0,
          opacity: 1,
          rotate: [0, 15, -15, 15, 0]
        } : {
          y: 0,
          opacity: 1,
          rotate: 0
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        className="text-3xl font-bold text-primary"
      >
        {current.toLocaleString()}
      </motion.span>
    </div>
  );
}
