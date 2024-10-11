'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Image
          src="/pp3.jpg"
          alt="Armanpreet"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold mb-4">Armanpreet</h1>
        <h2 className="text-2xl mb-6">Web Developer & Designer</h2>
        <p className="max-w-md mx-auto text-lg mb-8">
          Passionate about creating beautiful and functional web experiences. 
          Skilled in React, Next.js, and UI/UX design. Always eager to learn 
          and take on new challenges in the ever-evolving world of web development.
        </p>
        <div className="flex justify-center space-x-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold"
          >
            View Projects
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white px-6 py-2 rounded-full font-semibold"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}