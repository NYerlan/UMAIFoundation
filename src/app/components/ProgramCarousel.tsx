import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useRef, useState, Fragment } from "react";
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
  },
  {
    title: "Art Therapy",
    description: "Professional art therapists providing one-on-one sessions for emotional healing",
    imageUrl: "/images/programs/therapy.jpg"
  },
  {
    title: "ArtKits",
    description: "Delivering art supplies and creative activities directly to children's hospital rooms",
    imageUrl: "/images/programs/artkit.jpg"
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
  },
  {
    title: "Art in Nature",
    description: "Outdoor art activities connecting children with nature through creative expression",
    imageUrl: "/images/programs/nature.jpg"
  },
  {
    title: "Art Mentoring",
    description: "One-on-one mentoring program pairing children with professional artists",
    imageUrl: "/images/programs/mentoring.jpg"
  }
];

export default function ProgramCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
      
      // Add smooth transition
      container.style.transition = 'scroll-left 1s ease';
      
      setCurrentIndex((prev) => (prev - 1 + PROGRAMS.length) % PROGRAMS.length);
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
      
      // Add smooth transition
      container.style.transition = 'scroll-left 1s ease';
      
      setCurrentIndex((prev) => (prev + 1) % PROGRAMS.length);
    }
  };

  const handleDragStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.pageX);
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const container = containerRef.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    const itemWidth = containerWidth / 3;
    const deltaX = e.pageX - dragStartX;
    
    const newScrollLeft = scrollLeft - deltaX;
    container.scrollLeft = newScrollLeft;

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
    <div className="relative">
      <div
        ref={containerRef}
        className="overflow-hidden relative"
      >
        <div 
          className="flex gap-4 snap-x snap-mandatory scroll-smooth overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseMove={handleDragMove}
          style={{ 
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory',
            width: '100%'
          }}
        >
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              className="snap-start min-w-[300px] flex-shrink-0"
              style={{
                width: 'calc(100% / 3)',
                minWidth: '300px'
              }}
              transition={{
                type: 'tween',
                duration: 1
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
      <div className="absolute inset-y-0 left-4 flex items-center justify-between w-full">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/90 hover:bg-white/80 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="ml-auto">
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-white/90 hover:bg-white/80 transition-colors"
          >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        </div>
      </div>
    </div>
  );
}
