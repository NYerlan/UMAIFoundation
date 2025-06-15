import { motion } from "framer-motion";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export default function ProgramCard({ title, description, imageUrl }: ProgramCardProps) {
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        transition: { duration: 0.3 }
      }}
      className="bg-white/95 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 h-full w-full"
    >
      <div className="relative">
        <div className="aspect-square mb-4">
          <motion.div 
            className="relative h-full w-full rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          >
            <img 
              src={imageUrl} 
              alt={title}
              className="object-cover w-full h-full"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='%23666' text-anchor='middle' alignment-baseline='middle'%3EProgram Image%3C/text%3E%3C/svg%3E";
                console.log(`Image failed to load: ${e.currentTarget.src}`);
              }}
            />
          </motion.div>
        </div>
        <motion.h3 
          className="text-2xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{
            y: -5,
            transition: { duration: 0.2 }
          }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            opacity: 0.8,
            transition: { duration: 0.2 }
          }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
