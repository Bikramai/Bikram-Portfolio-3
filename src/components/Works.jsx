import React from "react";
import { styles } from "../styles";
import {
  blackGithub,
  git,
  github,
  linkedin,
  mail,
  ProjectLink,
} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
  source_code_link,
}) => {
  return (
    <div className="px-2 w-full  md:w-1/2 lg:w-1/3 p-6">
      <Link to={link}>
        <div className="bg-white p-6 w-full rounded-2xl md:h-[30rem] h-[30rem] relative">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-head font-bold md:text-[24px] text-[18px">{name}</h3>
              <img src={ProjectLink} alt="Link" className="w-6 h-6" />
              <img src={blackGithub} alt="Link" className="w-6 h-6" />
            </div>
            <p className="mt-2 text-black-200 text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 justify-center absolute bottom-2 left-0 right-0 mx-auto">
            {tags.map((tag) => (
              <div
                key={`${name}-${tag.name}`}
                className="flex items-center text-[14px]"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={tag.icon}
                    alt={tag.name}
                    className="w-[27px] h-[32px] rounded-md mb-2"
                  />
                  <p className="text-[7px] -mt-1 font-semibold text-black text-center">
                    {tag.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div className="text-center">
        <h2 className={`${styles.sectionHeadText} text-[#00CEA8]`}>
          Portfolio
        </h2>
      </div>
      <div className="flex flex-row gap-4 justify-end items-center -mb-20 mt-5 md:0">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin}
            alt="linkedin"
            className="md:w-10 w-7 h-7  md:h-10"
          />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={mail} alt="linkedin" className="md:w-10 w-7 h-7  md:h-10" />
        </a>
        <a href="" target="_blank" className=" border border-white rounded-full md:px-4 md:py-1.5 px-2 py-1 text-xs md:text-sm">
          Resume
        </a>
      </div>
      <div className="mt-20 flex flex-wrap -mx-2">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
