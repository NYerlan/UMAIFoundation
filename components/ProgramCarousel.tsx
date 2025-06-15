import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import ProgramCard from "./ProgramCard";

interface Program {
  title: string;
  description: string;
  imageUrl: string;
}

const PROGRAMS: Program[] = [
  {
    title: "ArtKits",
    description: "Delivering art supplies and creative activities directly to children's hospital rooms",
    imageUrl: "/images/programs/artkit.jpg"
  },
  {
    title: "Art Therapy",
    description: "Professional art therapists providing one-on-one sessions for emotional healing",
    imageUrl: "/images/programs/therapy.jpg"
  },
  {
    title: "Art Workshops",
    description: "Weekly art classes led by professional artists in hospital settings",
    imageUrl: "/images/programs/workshop.jpg"
  },
  {
    title: "Digital Art",
    description: "Introducing children to digital art tools and software",
    imageUrl: "/images/programs/digital.jpg"
  },
  {
    title: "Art History",
    description: "Educational programs teaching art history and appreciation",
    imageUrl: "/images/programs/history.jpg"
  },
  {
    title: "Art Exhibitions",
    description: "Organizing art exhibitions featuring children's artwork in hospitals and galleries",
    imageUrl: "/images/programs/exhibition.jpg"
  }
];

export default function ProgramCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef, { once: true });

  const handlePrev = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const itemWidth = containerWidth / 3;
      const maxScroll = (PROGRAMS.length - 2) * itemWidth;
      
      if (container.scrollLeft === 0) {
        container.scrollLeft = maxScroll;
      } else {
        container.scrollLeft = Math.max(0, container.scrollLeft - itemWidth);
      }
      
      container.style.transition = 'scroll-left 1s ease';
    }
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const itemWidth = containerWidth / 3;
      const maxScroll = (PROGRAMS.length - 2) * itemWidth;
      
      if (container.scrollLeft >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = Math.min(maxScroll, container.scrollLeft + itemWidth);
      }
      
      container.style.transition = 'scroll-left 1s ease';
    }
  };

  const handleDragStart = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const itemWidth = containerWidth / 3;
    const deltaX = e.pageX - container.scrollLeft;

    if (Math.abs(deltaX) > itemWidth / 3) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
    }

    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, controls]);

  return (
    <div className="relative w-full">
      <div className="h-[560px]">
        <div
          ref={containerRef}
          className="overflow-hidden relative h-[calc(100%-60px)]"
        >
          <div 
            className="flex gap-4 snap-x snap-mandatory scroll-smooth overflow-hidden h-full"
            onMouseDown={handleDragStart}
            style={{ 
              scrollBehavior: 'smooth',
              scrollSnapType: 'x mandatory',
              width: '100%',
              height: '100%',
              padding: '0 20px'
            }}
          >
            {PROGRAMS.map((program) => (
              <motion.div
                key={program.title}
                className="snap-start min-w-[300px] flex-shrink-0"
                style={{
                  width: 'calc(100% / 3)',
                  minWidth: '300px',
                  height: '100%'
                }}
              >
                <ProgramCard
                  title={program.title}
                  description={program.description}
                  imageUrl={program.imageUrl}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/programs">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-[#ef72a3] text-[#ef72a3] rounded-full hover:bg-[#ef72a3] hover:text-white transition-all duration-300 font-semibold"
          >
            View All Programs
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
