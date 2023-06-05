import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, addres, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {addres}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollyProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
          Experience
        </h2>

        <div ref={ref} className="w-[75] mx-auto relative lg:w-[90%] md:w-full">
          <motion.div
            style={{ scaleY: scrollyProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
            md:w-[2px] md:left-[30px] xs:left-[20px]"
          />

          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Ankora - Hackathon 2023"
              company="Ankora.inc"
              companyLink="https://ankorainc.com"
              time="March 18-19, 2023"
              addres="Srđana Aleksića 2, Sarajevo 71000, BIH"
              work="
              The goal of that hackathon was to challenge participants to develop innovative solutions using NLP AI's cutting-edge technology that could improve day-to-day processes in IT and make our work more efficient and effective.
              During this Hackathon, my team and I created a full stack application that we called food-mate. The main task of the application was to generate a diet plan using the ChatGPT API, in such a way that for registered users it would output a seven-day plan, while for users who do not have an account it would output only a one-day plan."
            />
            <Details
              position="Intern"
              company="Federal Pension and Disability Insurance Institute of Bosnia and Herzegovina"
              companyLink="https://www.fzmiopio.ba/?lang=ba"
              time="Jul 2021 - Jul 2022"
              addres="Ložionička 2, Sarajevo 71000, BIH"
              work="I performed the function of System Administrator and IT Support. My main role was managing the Domain Controller and Active Directory, as well as configuring computers and other smaller devices.
              Work on a special web platform used by the Federal Pension and Disability Insurance Institute of Bosnia and Herzegovina called eGop, where I was an administrator."
            />
            <Details
              position="Student Intern"
              company="UNION Banka"
              companyLink="https://www.unionbank.ba/"
              time="Feb 2020 - Apr 2020"
              addres="Hamdije Kreševljakovića 19, Sarajevo 71000, BIH."
              work="
              Assisted on preparing reviewing market analysis and currency rates in banking services. Together with my mentor, I worked on research and monitoring of the currency market, as well as money exchange between banks.
              "
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
