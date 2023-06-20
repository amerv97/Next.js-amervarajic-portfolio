import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/What is Redux with easy explanation.png";
import article4 from "../../public/images/articles/What is higher order component in React.jpg";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import article11 from "../../public/images/articles/8a7f1050-ca1b-44dc-a827-736bc05939e7.jpg";
import article12 from "../../public/images/articles/e47f5e9e-023c-49cc-b0a6-83e3462ab040.jpg";
import tz from "../../public/images/articles/tz.jpg";
import vienna from "../../public/images/articles/Vienna1.jpg";
import team from "../../public/images/articles/team.jpg";
import diploma from "../../public/images/articles/diploma.jpg";
import coach from "../../public/images/articles/kenan.jpg";

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

const Article = ({ img, title, date, link, summary }) => {
  return (
    <>
      <motion.li
        initial={{ y: 200 }}
        whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className="w-full relative p-4 py-6 my-4 rounded-xl flex items-start flex-col  justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
      sm:flex-col"
      >
        <MovingImg title={title} img={img} link={link} />
        <span className="text-primary font-semibold pl-4 text-left dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
          {summary}
        </span>
      </motion.li>
    </>
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
        <title>Amer Varajic | Karate Page</title>
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
              title="27th Balkan Championship for children 2023, Bar (Montenegro) in the role of trainer."
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
              title="21st Balkan Senior Championship 2019, Čačak (Serbia) as a competitor "
              summary="In 2019, at the 21. Balkan Senior Karate Championship in Čačak, Serbia. 
              I performed in the team composition for the national team of Bosnia and Herzegovina. My team and I achieved an incredible feat. We emerged victorious by defeating Bulgaria in the first match, followed by a win against Serbia, the reigning European vice-champion. In the final match, we triumphed over Turkey, securing the Balkan championship title. Our relentless training, skillful techniques, and unwavering teamwork propelled us to this remarkable victory, leaving an indelible mark in the history of the Bosnian sport."
              link="https://www.balkankarate.org/wp-content/uploads/2019/04/21st_Balkan_Seniors_Championship_2019-Results.pdf"
              img={article12}
              time="4 min read"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 ">
            My Karate Career
          </h2>
          <ul>
            <Article
              title="My beginnings..."
              link="/"
              img={tz}
              summary="When I was a 9-year-old boy brimming with boundless energy, I embarked on a remarkable journey that would shape my character and discipline. It was the day I started training in Karate. This martial art became the channel through which I discovered focus, self-discipline, and the immense joy of physical movement. Allow me to share my story of how this journey began, and the profound impact it had on my life. From the very beginning, I discovered that Karate was the perfect outlet for my overflowing energy. The training sessions were intense and dynamic, involving various exercises and techniques designed to strengthen the body and sharpen the mind. Kicking, punching, and blocking movements became second nature to me as I absorbed the fundamental techniques of this ancient art form. "
              date="May 23, 2023"
            />
          </ul>
          <ul>
            <Article
              title="Sensei, the Guiding Light"
              date="May 23, 2023"
              link="/"
              img={coach}
              summary="My karate journey would not have been possible without the guidance of my Sensei Kenan Alikadić. With wisdom gained through years of practice, his potential is ours and instilled in us the values of respect, humility and perseverance. Sensei not only taught us techniques, but also shared stories of legendary karate masters and their unwavering dedication such as coach and sensei Suad Cupina, who is considered the coach of all coaches, as my coach was his student. Inspired by his teachings, I looked to him not only as a mentor but also as a role model. Outside the dojo, Sensei's influence extended beyond the realm of karate. Teach us that the principles we learned in training are applicable to all aspects of life. The discipline and focus we honed in karate became tools we could use in our academic pursuits, careers, and relationships. Sensei emphasized the importance of balance, encouraging us to cultivate a harmonious synergy between body, mind and spirit."
            />
          </ul>
          <ul>
            <Article
              title="My Karate Journey: From Local Champion to National Team Member"
              date="May 23, 2023"
              link="/"
              img={vienna}
              summary="At the age of 12, I began my Karate career, competing in tournaments with a burning passion for the sport. On my very first competition, I became the champion of Kanton Sarajevo, showcasing my skill and determination.

              Building on my success, I went on to become the vice-champion of my state, catching the attention of the national team selectors. This incredible opportunity led me to represent Bosnia & Herzegovina, proudly wearing the national colors from the U14 category to the senior division. Representing his country at the Balkan Championships, as well as at the European Championship.
              I am the winner of numerous medals, both domestic and international."
            />
          </ul>
          <ul>
            <Article
              title="Transitioning from Athlete to Coach: A New Chapter in Karate"
              date="May 23, 2023"
              link="/"
              img={team}
              summary="After sustaining a chin injury at my last Balkan Championship in 2020 held in Belgrade, I made the difficult decision to retire from competitive fighting at the age of 24. However, my love for karate remained undiminished. I found a new purpose as a coach at Sambon Karate Club, my current club.
              As a coach, I have the privilege to share my knowledge and passion for karate with the next generation. Leading and mentoring young talents, I try to instill discipline, resilience and love for sports. Witnessing their growth and development is incredibly rewarding.
              So now, as a coach, I already have my competitors who perform at the World and European Championships, as well as at the Balkan Championships, where my club currently has two current Balkan champions. After I retired as a competitor, I devoted myself and progressed in the profession. So on 06.08.2022 I bocome Master of Karate Black belt 3rd DAN.
              "
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
