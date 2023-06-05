import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span
          className="font-medium capitalize text-dark/75 dark:text-light/75
          xs:text-sm"
        >
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollyProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64">
        <h2
          className="font-bold text-8xl mb-32 w-full text-center
        md:text-6xl xs:text-4xl md:mb-16"
        >
          Education
        </h2>

        <div
          ref={ref}
          className="w-[75] mx-auto relative 
        lg:w-[90%] md:w-full"
        >
          <motion.div
            style={{ scaleY: scrollyProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Bachelor of Management and IT"
              time="Oct 2016- Dec 2020"
              place="School of Economics and Business Sarajevo, University of Sarajevo"
              info="This qualification has equipped me with a comprehensive understanding of both management principles and information technology, making me a valuable asset in today's rapidly evolving business landscape.

              Throughout my studies, I gained a solid foundation in various areas such as business administration, economics, finance, marketing, and organizational behavior. I also developed a deep understanding of how information technology plays a critical role in enhancing business operations, optimizing decision-making processes, and driving innovation."
            />
            <Details
              type="Economic technician"
              time="Sep 2012- May 2016"
              place="High School Center Vogošća"
              info="At High School Center Vogošća, I received comprehensive training in various subjects related to economics and business. The curriculum included courses in economics, accounting, finance, marketing, and entrepreneurship, among others. Through theoretical teachings and practical applications, I acquired a solid foundation in the principles and practices of the economic field."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Education;
