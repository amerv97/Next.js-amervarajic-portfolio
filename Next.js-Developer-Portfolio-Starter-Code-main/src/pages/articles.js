import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/What is Redux with easy explanation.png";
import article4 from "../../public/images/articles/What is higher order component in React.jpg";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article11 from "../../public/images/articles/8a7f1050-ca1b-44dc-a827-736bc05939e7.jpg";
import article12 from "../../public/images/articles/e47f5e9e-023c-49cc-b0a6-83e3462ab040.jpg";

import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl capitalize font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden "
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="w-full relative p-4 py-6 my-4 rounded-xl flex items-center  justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
      sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <>
      <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
        <div className="top-0 absolute -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl " />
        <Link
          href={link}
          target="_blank"
          className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
        <Link href={link} target="_blank">
          <h2
            className="text-2xl capitalize font-bold my-2 mt-4 hover:underline 
          xs:text-lg"
          >
            {title}
          </h2>
          <p className="text-sm mb-2">{summary}</p>
          <span className="text-primary font-semibold dark:text-primaryDark">
            {time}
          </span>
        </Link>
      </li>
    </>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Amer Varajic | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Karate, my life, my passion!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text6xl xs:!text-4xl "
          />
          <ul
            className="grid grid-cols-2 gap-16 lg:gap-8
            md:grid-cols-1 md:gap-y-16"
          >
            
            <FeaturedArticle
              title="Balkan Championship for children 2023, Bar Montenegro in the role of trainer."
              summary="I want to highlight this result as one of my greatest successes in the role of coach.
              My club competed with four competitors, three of them won medals, and two of them even won the title of Balkan champion.
              The champions of the Balkans were Sara Hukara in the category of girls 13 years old, -49kg and Emir Zundja in the category of boys 12 years old, +52kg.
              While Amir Zundja settled for third place in the category of boys 11 years +50kg
              You can see more about this by clicking on the picture."
              time="3 min read"
              link="https://www.rtvvogosca.ba/jos-jedna-titula-prvaka-balkana-sara-hukara-prvakinja-balkana/"
              img={article11}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="In 2019, at the 21. Balkan Senior Karate Championship in Čačak, Serbia. 
              I performed in the team composition for the national team of Bosnia and Herzegovina. My team and I achieved an incredible feat. We emerged victorious by defeating Bulgaria in the first match, followed by a win against Serbia, the reigning European vice-champion. In the final match, we triumphed over Turkey, securing the Balkan championship title. Our relentless training, skillful techniques, and unwavering teamwork propelled us to this remarkable victory, leaving an indelible mark in the history of the Bosnian sport."
              link="https://www.balkankarate.org/wp-content/uploads/2019/04/21st_Balkan_Seniors_Championship_2019-Results.pdf"
              img={article12}
              time="4 min read"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 ">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="May 23, 2023"
              link="/"
              img={article3}
            />
          </ul>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="May 23, 2023"
              link="/"
              img={article4}
            />
          </ul>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="May 23, 2023"
              link="/"
              img={article5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
