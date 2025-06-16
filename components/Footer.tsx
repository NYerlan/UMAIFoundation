"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", href: "#", icon: "f" },
    { name: "Instagram", href: "#", icon: "i" },
    { name: "Twitter", href: "#", icon: "x" },
    { name: "LinkedIn", href: "#", icon: "in" }
  ];

  return (
    <footer className="bg-white/90 backdrop-blur-sm border-t border-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center md:justify-start">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-32 h-32 rounded-full bg-white flex items-center justify-center border-2 border-primary"
              >
                <video
                  src="/logo.mp4"
                  className="w-24 h-24"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Organization Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-4">UMAI Foundation</h3>
            <p className="text-lg text-gray-600">
              Empowering children through education, healthcare, and community support.
            </p>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold text-primary mb-4">Visit Us</h4>
            <div className="space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Address:</span> 24230 Hawthorne Boulevard, Torrance, 90505, California, USA
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +1 (310) 818 17 61
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> info@umaifoundation.org
              </p>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold text-primary mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.div 
                  key={link.name}
                  whileHover={{ scale: 1.2 }}
                  className="group"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-white transition-colors"
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-white border-2 border-primary group-hover:border-primary opacity-80 transition-all duration-300"
                    >
                      <span className="text-xl">{link.icon}</span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} UMAI Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
