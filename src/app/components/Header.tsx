"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "Ways to Help", href: "/help" },
    { name: "Contact Us", href: "/contact" }
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "f" },
    { name: "Instagram", href: "#", icon: "i" },
    { name: "Twitter", href: "#", icon: "x" },
    { name: "LinkedIn", href: "#", icon: "in" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center border-2 border-primary transition-colors duration-300 group-hover:border-[#ef72a3]"
            >
              <img src="/logo.png" alt="Umai Foundation Logo" className="w-8 h-8" />
            </motion.div>
            <span className="text-xl font-bold text-primary transition-colors duration-300">UMAI Foundation</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div 
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-600 transition-colors duration-300 hover:text-[#ef72a3]"
                >
                  {item.name}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.div>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
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
                    className="w-8 h-8 rounded-full flex items-center justify-center bg-white border-2 border-primary group-hover:border-primary opacity-80 transition-all duration-300"
                  >
                    <span className="text-xl">{link.icon}</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Volunteer Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="hidden md:block group"
          >
            <Link
              href="/volunteer"
              className="px-6 py-2 border-2 border-[#ef72a3] text-[#ef72a3] rounded-full transition-all duration-300 hover:bg-[#ef72a3] hover:text-white"
            >
              Volunteer
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-primary"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-600 transition-colors duration-300 hover:text-[#ef72a3]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
