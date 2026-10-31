import React from 'react';
import { motion } from 'framer-motion';

export const TextReveal = ({
  text,
  className = '',
  delay = 0,
  highlight = "",
  highlightClass = "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600"
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 18,
      transition: {
        type: "spring",
        damping: 18,
        stiffness: 100
      }
    }
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {words.map((word, index) => {
        const isHighlight = highlight && word.toLowerCase().includes(highlight.toLowerCase());
        return (
          <motion.span
            variants={child}
            key={index}
            className={`mr-1.5 inline-block ${isHighlight ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default TextReveal;
