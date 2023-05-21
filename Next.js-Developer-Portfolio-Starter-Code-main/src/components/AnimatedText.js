import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y:50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden ${className}`}
    >
      <motion.h1
        className="w-full inline-block font-bold text-dark capitalize text-6xl"
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
            initial="initial"
            animate="animate"
          >
            {word}&nbsp;
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
