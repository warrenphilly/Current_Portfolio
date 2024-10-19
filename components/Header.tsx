"use client";

import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const handleScrollToBento = () => {
    const bentoSection = document.getElementById("bento-section");
    if (bentoSection) {
      bentoSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed  top-0 left-0 w-full z-50  backdrop-blur-xl text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl text-blue-300 hidden md:block">
          Warren Phillips
        </Link>
        <nav>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center justify-center space-x-6 "
          >
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-300 hover:text-blue-100 transition-colors duration-300 "
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a
              href="#projects"
              className="text-[#1B3F59] hidden md:block  px-3 py-2 bg-blue-300 rounded-2xl text-sm font-medium"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </nav>
        <motion.a
              href="#projects"
              className="text-[#1B3F59]  block md:hidden px-3 py-2 bg-blue-300 rounded-2xl text-sm font-medium"
            >
              Download Resume
            </motion.a>
      
        
        
      </div>
    </header>
  );
}
