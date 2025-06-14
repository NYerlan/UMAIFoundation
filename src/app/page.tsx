"use client"

import { motion } from "framer-motion";
import { useCallback } from "react";
import { toast } from "react-hot-toast";
import { ImpactStat } from "./components/ImpactStat";
import { faBox, faChild, faPaintBrush, faUser, faClock, faHandshake, faHeart, faPhone } from "@fortawesome/free-solid-svg-icons";
import ProgramCarousel from "./components/ProgramCarousel";
import ProgramCard from "./components/ProgramCard";
import Header from "./components/Header";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="relative">
      <Header />

      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Igniting Hope Through Art
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Empowering children facing critical illnesses through the healing power of art
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#ef72a3] text-white rounded-full font-semibold hover:bg-[#ef72a3]/90 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At UMAI Foundation, we believe in the transformative power of art to bring comfort, joy, and a sense of normalcy to children facing critical illnesses. Our programs provide a creative outlet, helping young patients cope with their treatments and rediscover their inner strength.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#ef72a3] text-[#ef72a3] rounded-full transition-all duration-300 hover:bg-[#ef72a3] hover:text-white font-semibold"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[#d4d4d4]/50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16 z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the positive change we're making in the lives of children and their families
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ImpactStat 
              number={3000} 
              label="ArtKits Sent" 
              icon={faBox} 
            />
            <ImpactStat 
              number={1100} 
              label="Children Helped" 
              icon={faChild} 
            />
            <ImpactStat 
              number={50} 
              label="Art Programs" 
              icon={faPaintBrush} 
            />
            <ImpactStat 
              number={30} 
              label="Professional Artists" 
              icon={faUser} 
            />
            <ImpactStat 
              number={2200} 
              label="Volunteer Hours" 
              icon={faClock} 
            />
            <ImpactStat 
              number={100} 
              label="Partners Contributed" 
              icon={faHandshake} 
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white/95">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16 z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Explore our creative programs designed to bring joy and healing to children in need
            </p>
          </motion.div>
          <ProgramCarousel />
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-[#d4d4d4]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">
              Get Involved
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us in making a difference in the lives of children facing critical illnesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#ef72a3] rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faUser} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Volunteer</h3>
                <p className="text-gray-600 mb-4">
                  Share your time and talents to help bring joy and healing to children in need
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#ef72a3] text-white rounded-full hover:bg-[#ef72a3]/90 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#ef72a3] rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faHeart} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Donate</h3>
                <p className="text-gray-600 mb-4">
                  Support our mission by making a donation to help provide art supplies and programs
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#ef72a3] text-white rounded-full hover:bg-[#ef72a3]/90 transition-all duration-300"
                >
                  Donate Now
                </motion.button>
              </motion.div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#ef72a3] rounded-full flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={faPhone} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                <p className="text-gray-600 mb-4">
                  Get in touch with us to learn more about our programs and how to get involved
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#ef72a3] text-white rounded-full hover:bg-[#ef72a3]/90 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
