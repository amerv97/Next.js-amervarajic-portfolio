import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

import article1 from "../../public/images//articles/pagination component in reactjs.jpg";

import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const FeaturedArtice = ({ img, title, time, summary, link }) => {
  return (
    <>
      <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="w-full h-auto"></Image>
        </Link>
        <Link href={link} target="_blank">
          <h2 className="text-2xl capitalize font-bold my-2 hover:underline">
            {title}
          </h2>
          <p className="text-sm mb-2">{summary}</p>
          <span className="text-primary font-semibold">{time}</span>
        </Link>
      </li>
    </>
  );
};

const article = () => {
  return (
    <>
      <Head>
        <title>Amer Varajic | Articles Page</title>
        <meta name="description" content="description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16 " />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArtice
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArtice
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={article1}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default article;
