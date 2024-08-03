import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText} text-[#00CEA8]`}>About Me.</h2>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Hi! I'm a newly minted Junior Full Stack Developer coding in TypeScript,
        JavaScript, Python, SQL. Frameworks I've worked with: Flask, Django,
        React, Node.js. Love working with REST APIs and PostgreSQL/Postman
        databases on backend. I'm currently coding 8-10 hours a day and I love
        every minute of it. I can't wait to find my first full time opportunity.
      </p>
    </>
  );
};

export default SectionWrapper(About, "about");
