import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-[#00CEA8]`}>About Me.</h2>

      <p>
      I'm a full stack software engineer, interested in crafting high-quality, 
      clean code and continuing to expand my interest in algorithms, data structures, 
      object-oriented code, and scalable design. Prior career informs my relatability, 
      documentation, time management, attention to detail, delivery, responsiveness, 
      and positivity to advance a software team. Junior Full Stack Developer coding in 
      JavaScript, TypeScript, Python, SQL. Frameworks I've worked with: Flask, Django, React, 
      Node.js. Love working with REST APIs and PostgreSQL databases on backend. I have a particular 
      interest in translating UI designs into reality, AI generative tools to solve problems, clean, 
      refactored code, testing and TDD, and would love to learn more about Cloud hosting.
      </p>
    </>
  );
};

export default SectionWrapper(About, "about");
