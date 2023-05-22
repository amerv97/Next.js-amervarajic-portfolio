import React from "react";

const Details = ({ position, company, companyLink, time, addres, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="font-bold capitalize text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75">
          {time} | {addres}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Experience
        </h2>

        <div className="w-[75] mx-auto relative">
          <ul>
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-Present"
              addres="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-Present"
              addres="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-Present"
              addres="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
            />
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="www.google.com"
              time="2022-Present"
              addres="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
