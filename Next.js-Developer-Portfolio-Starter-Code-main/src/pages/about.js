import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/DSC_0505.JPG";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Amer Varajic | About Page</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 tect-lg font-bold uppercase text-dark/75 dark:text-light/75 ">
                Biography
              </h2>
              <p className="font-medium ">
                - Dear Sir or Madam, my name is Amer Varajić, I am 26 years old,
                I was born and I currently live in Sarajevo. I am a highly
                motivated and qualified recently graduated engineer of
                management and informatics at the Faculty of Economics of the
                University of Sarajevo. I am eager to contribute my talents to a
                thriving organization and collaborate with a team. I have a
                proven ability to learn quickly while working efficiently, which
                allows me to gain valuable experience and continuously expand my
                knowledge. I am an extremely communicative and friendly person,
                always eager to connect with others. My ability to process
                information quickly and efficiently allows me to excel at any
                task. With strong analytical skills, I possess a keen eye for
                detail and can identify patterns and insights that others may
                overlook.
              </p>
              <p className="font-medium my-4">
                - I found my passion in mathematics as a boy, I always loved
                numbers and logic, as well as the field of business. These are
                actually my biggest reasons for enrolling in the Faculty of
                Economics.
              </p>
              <p className="font-medium ">
                - IT, as currently the most dynamic branch, has always seemed
                interesting to me, and in the last year I started programming
                (mainly in the front-end field, although I also work on the
                back-end), specifically React.js. I also made a couple of
                projects, which can be seen on the site.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="top-0 absolute -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Amer Varajic Profile"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col justify-between items-end xl:col-span-8 xl:flex-row xl:items-center md:order-1">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <spam className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl">
                  <AnimatedNumbers value={100} />+
                </spam>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <spam className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </spam>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <spam className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </spam>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
