// src/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ slug, title, excerpt, image }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="rounded-2xl shadow-md overflow-hidden bg-white dark:bg-black border border-gray-200 dark:border-gray-800 transition-all"
    >
      <Link to={`/blog/${slug}`}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{excerpt}</p>
          <span className="text-blue-600 hover:underline mt-3 inline-block text-sm font-medium">Read more →</span>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
