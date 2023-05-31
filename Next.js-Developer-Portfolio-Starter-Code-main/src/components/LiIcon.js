import React from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";

const LiIcon = ({ reference }) => {
  const { scrollyProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="left-0 absolute dark:stroke-light  stroke-dark">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollyProgress,
          }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 stroke-primary dark:fill-primaryDark "
        />
      </svg>
    </figure>
  );
};

export default LiIcon;
