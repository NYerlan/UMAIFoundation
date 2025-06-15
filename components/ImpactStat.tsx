import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faChild, faPaintBrush, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import RollingNumber from "./RollingNumber";

interface ImpactStatProps {
  number: number;
  label: string;
  icon: any;
}

export function ImpactStat({ number, label, icon }: ImpactStatProps) {
  return (
    <motion.div 
      whileHover={{ 
        scale: 1.05,
        backgroundColor: '#ef72a333' // More opaque pink
      }}
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 relative overflow-hidden z-10"
    >

      <div className="relative z-10">
      <div className="flex flex-col items-center space-y-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-primary"
        >
          <FontAwesomeIcon 
            icon={icon} 
            className="w-8 h-8" 
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-primary"
        >
          <RollingNumber target={number} />
          <span className="text-primary">+</span>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-600"
        >
          {label}
        </motion.p>
      </div>
      </div>
    </motion.div>
  );
}
