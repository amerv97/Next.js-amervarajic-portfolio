import React from "react";
import AmerLogo from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto">
      <div className="flex w-48 h-auto justify-center relative items-center md:w-24 md:absolute">
        <AmerLogo className={"fill-dark animate-spin-slow dark:fill-light"} />

        <Link
          href={"mailto:varajicamer@gmail.com"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark
         
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
          hover:dark:border-light
          
          md:w-12 md:h-12 md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
