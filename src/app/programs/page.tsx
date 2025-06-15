"use client"

import { motion } from "framer-motion";
import ProgramGrid from "@components/ProgramGrid";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">
              Our Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our creative initiatives designed to bring joy and healing to children facing critical illnesses
            </p>
          </motion.div>
          
          {/* Programs Grid Section */}
          <div className="max-w-7xl mx-auto">
            <ProgramGrid />
          </div>
        </div>
      </section>
    </div>
  );
}
