import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ img, title, date, description, imageAlignment }) => {
  return (
    <motion.div
      className="bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-900 shadow-lg rounded-xl p-8 my-4 w-full flex flex-col items-center text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      style={{ maxWidth: '600px', minHeight: '450px' }}  
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      {/* Image */}
      {img && (
        <div className="rounded-full overflow-hidden w-32 h-32 mb-6 border-4 border-indigo-400">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      {/* Content */}
      <div className="flex-grow flex flex-col justify-between">
        <h3 className="text-center text-3xl font-bold mt-2 text-white">{title}</h3>
        <p className="text-center text-lg text-gray-300 mb-4">{date}</p>
        <div
          className="text-center text-white mt-4 text-xl"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedCard;

