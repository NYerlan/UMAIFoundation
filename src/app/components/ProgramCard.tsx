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
      whileHover={{ scale: 1.02 }}
      className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center transition-all duration-300"
    >
      <div className="relative">
        <div className="aspect-square mb-4">
          <motion.div 
            className="relative w-full h-full rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title}
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3Ctext x='50' y='50' font-family='Arial' font-size='12' fill='%23666' text-anchor='middle' alignment-baseline='middle'%3EProgram Image%3C/text%3E%3C/svg%3E";
                  console.log(`Image failed to load: ${e.currentTarget.src}`);
                }}
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <h3 className="text-gray-500">Program Image</h3>
              </div>
            )}
          </motion.div>
        </div>
        <motion.h3 
          className="text-2xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border-2 border-[#ef72a3] text-[#ef72a3] rounded-full transition-all duration-300 hover:bg-[#ef72a3] hover:text-white font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Learn More
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
