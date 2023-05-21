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
          <span key={word + "-" + index} className="inline-block ">
            {word}&nbsp;
          </span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
