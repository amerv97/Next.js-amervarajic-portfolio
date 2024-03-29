import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic1 from '../../public/images/profile/My project.png'
import TransitionEffect from "@/components/TransitionEffect";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()

  const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:varajicamer@gmail.com"
  }
  return (
    <>
      <Head>
        <title>Amer Varajic</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic1}
                alt="Amer Varajic"
                className="w-full h-auto lg:hidden md:inline-block ms:w-full "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="w-1/2 flex flex-col self-center items-center lg:w-full lg:text-center ">
              <h1> </h1>
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled junior web developer, I am dedicated to turning
                ideas into innovative web applications. Explore some of my latest
                projects, showcasing my expertise in React.js and
                web development. You can aslo find my biography and Karate results
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
                  
                  md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:varajicamer@gmail.com"
                  className="ml-4 text-lg font-medium text-dark underline dark:text-light
                  md:text-base"
                  onClick={(e) => handleContactClick(e)}
                  // ! fix later with mailbox
                >
                  varajicamer@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="w-24 absolute right-8 bottom-8 inline-block md:hidden">
          <Image
            src={lightBulb}
            alt="Amer Varajic"
            className="w-full h-auto "
          />
        </div>
      </main>
    </>
  );
}
