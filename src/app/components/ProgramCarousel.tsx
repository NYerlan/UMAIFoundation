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

  const handlePrev = () => {
    const container = containerRef.current;
    if (container) {
      const containerWidth = container.offsetWidth;
      const itemWidth = containerWidth / 3;
      if (container.scrollLeft === 0) {
        container.scrollLeft = (PROGRAMS.length - 2) * itemWidth;
      } else {
        container.scrollLeft -= itemWidth;
      }
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
        container.scrollLeft += itemWidth;
      }
      setCurrentIndex((prev) => (prev + 1) % PROGRAMS.length);
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      const interval = setInterval(() => {
        const container = containerRef.current;
        if (container) {
          const containerWidth = container.offsetWidth;
          const itemWidth = containerWidth / 3;
          const maxScroll = (PROGRAMS.length - 2) * itemWidth;
          
          if (container.scrollLeft >= maxScroll) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += itemWidth;
          }
          
          setCurrentIndex((prev) => (prev + 1) % PROGRAMS.length);
        }
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, controls]);

  return (
    <Fragment>
      <motion.div
        ref={containerRef}
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all duration-200"
          aria-label="Previous program"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/90 transition-all duration-200"
          aria-label="Next program"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        <motion.div
          className="flex gap-8 snap-x snap-mandatory overflow-x-auto scroll-smooth carousel-container"
          style={{ 
            scrollSnapType: "x mandatory",
            width: "100%",
            scrollBehavior: "smooth"
          }}
        >
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={index}
              className="snap-start flex-shrink-0 w-full md:w-[30%] lg:w-[30%] min-w-[300px]"
              initial={{
                opacity: 0,
                x: index < currentIndex ? -100 : 100,
                scale: 0.9
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
                zIndex: index === currentIndex ? 20 : 10
              }}
            >
              <ProgramCard {...program} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Fragment>
  );
}
