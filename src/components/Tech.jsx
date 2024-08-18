import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { services, technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { first, link, sec, third } from "../assets";
const Tech = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const ServiceCard = ({ icon, title, index }) => (
    <div className="w-full p-2">
      <motion.div className="w-full p-[1px] rounded-[20px]">
        <div className=" md:px-12 px-2 flex justify-between  flex-col border-white">
          <div className="flex md:flex-col flex-col justify-center gap-5">
            <a href="" target="_blank" className="bg-tertiary hover:scale-110 duration-300 rounded-[20px] flex p-5 items-center  mx-auto justify-center">
              <img
                src={icon}
                alt="web-development"
                className="w-20 h-20 object-contain"
              />
            </a>
            <div className="flex mx-auto">
              <h3 className="text-white text-center mtext-[16px] text-sm  my-auto">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
  return (
    <>
      {/* <h2 className={`${styles.sectionHeadText} text-[#00CEA8] mt-20 md:mt-0`}>
        My Experience
      </h2> */}
      {/* <section className="text-white py-16 "> */}
        {/* <div className="container mx-auto md:px-4"> */}
          {/* <div className="relative bg-[#151030] px-6 pt-6 pb-2 border rounded-xl "> */}
            {/* <div
              className=" cursor-pointer lg:text-2xl md:text-xl text-sm mb-4 font-semibold text-head flex flex-row justify-between"
            > */}
              {/* <h3>Freelance, Full Stack Software Engineer </h3>
              <h3 className="">Jan 2023 - Present</h3> */}
            {/* </div> */}
            {/* <p className="mt-2 lg:text-lg md:text-sm text-xs">
              Technologies: Python, JavaScript, TypeScript, React, Node.js,
              Tailwind CSS
            </p> */}
            {/* {open1 && ( */}
              <>
                {/* <p className="mt-5  lg:text-lg md:text-sm text-xs">
                  Parkinson Ai -Full Stack Web development
                </p> */}
                {/* <p className=" lg:text-lg md:text-sm text-xs">
                  Technologies: Frontend: HTML5, CSS3, Bootstrap, JavaScript
                  (ES6), Backend: Python, Django, Database: SQL, Speech
                  Recognition: Web Speech API or voice, RESTful APIs: for
                  communication between frontend and backend, Authentication:
                  Web Tokens Authentication for secure access
                </p> */}
                {/* <ul className=" space-y-2 list-disc list-inside  lg:text-lg md:text-sm text-xs"> */}
                  {/* <li className="">
                    Developed an innovative web application named "PARKINSON"
                    that uses voice input through a RESTful API to detect
                    symptoms of neurological diseases.
                  </li> */}
                  {/* <li>
                    Implemented a RESTful APIs for Interaction with ai model for
                    capturing and processing voice samples from users.
                  </li> */}
                  {/* <li>
                    Created a backend using Python with Django to handle voice
                    data, analyze symptoms, and provide diagnostic feedback.
                  </li> */}
                {/* </ul> */}

                {/* <p className="md:mt-8 mt-4 lg:text-lg md:text-sm text-xs">
                  Cleaning Services Solution- Full Stack Web development
                </p> */}
                {/* <p className=" lg:text-lg md:text-sm text-xs ">
                  Backend Framework: Django (Python), Frontend: HTML5, CSS3,
                  JavaScript (ES6), Frontend Framework: Bootstrap, Database:
                  PostgreSQL (or any other supported by Django)
                </p> */}
                <ul className=" space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs">
                  {/* <li>
                    Developed "Omi Serve," an innovative web application for
                    ordering general services online.
                  </li> */}
                  {/* <li>
                    Implemented a backend using Django, facilitating service
                    order management and user interaction.
                  </li>
                  <li className="md:mb-8 mb-4">
                    Designed a frontend with HTML, CSS, JavaScript, and
                    Bootstrap to create a responsive and user- friendly
                    interface for service ordering.
                  </li> */}
                </ul>
                {/* <p className="md:mt-10 mt-5 lg:text-lg md:text-sm text-xs">
                  Omni Group-
                </p>
                <p className="lg:text-lg md:text-sm text-xs">
                  Frontend: HTML5, CSS3, JavaScript (ES6), Frontend Framework:
                  Bootstrap for responsive design, Mapping: Google Maps API for
                  property location visualization, Backend: Python (Django
                  framework)
                </p> */}
                {/* <p className="lg:text-lg md:text-sm text-xs">
                  Database: PostgreSQL for data storage
                </p> */}
                {/* <ul className=" space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs"> */}
                  {/* <li>
                    Developed an innovative web application named "Omni Group"
                    for a construction company specializing in apartment and
                    land sales.
                  </li> */}
                  {/* <li>
                    Implemented a frontend using HTML, CSS, JavaScript, and
                    Bootstrap to showcase available properties with detailed
                    descriptions, images, and pricing.
                  </li> */}
                  {/* <li>
                    Built a backend system with Django to manage property data,
                    including integration with Google Maps API for location
                    mapping and displaying building plans.
                  </li> */}
                {/* </ul> */}
              </>
            {/* )} */}
            {/* <div className="grid grid-cols-6 gap-3">
              <a href="" target="_blank" className="relative">
                <img
                  src={first}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4 "
                />
                <img
                  src={link}
                  alt="project0"
                  className="w-14 md:w-7 h-10 md:h-5 absolute right-0 bottom-0"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={sec}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>

            </div> */}
            {/* <div onClick={() => {
                setOpen1(!open1);
              }} className=" flex cursor-pointer flex-col items-center justify-center mt-5">
                {open1 && 
              <img src="/icons/up.svg" className="h-10 hover:h-12 duration-300" alt="" />}
              {!open1 && 
              <img src="/icons/down.svg" className="h-7 hover:h-9 duration-300" alt="" />}
            </div> */}
          {/* </div> */}

          {/* second */}
          {/* <div className="relative bg-[#151030] p-6 border rounded-xl my-5 text-lg">
            <div
              className=" lg:text-2xl md:text-xl text-sm mb-4 font-semibold text-head flex flex-row justify-between"
            >
              <h3>Coding Temple, Entry-Level Software Engineer</h3>
              <h3 className=""> Oct 2023 - Jan 2024</h3>
            </div>
            <p className="mt-2 lg:text-lg md:text-sm text-xs ">
              Languages: Python, JavaScript, TypeScript, JSX, Jinja, SQL
            </p>
            <p className="lg:text-lg md:text-sm text-xs">
              Frameworks: Flask, Flask-SQLAlchemy, React, Bootstrap, Material UI
            </p>
            <p className="lg:text-lg md:text-sm text-xs">
              Auxiliary: RESTful APIs, PostgreSQL
            </p>
            {open2 && (
              <>
                <p className="md:mt-8 mt-4 lg:text-lg md:text-sm text-xs">
                  {" "}
                  Book Sharing Social Media App -{" "}
                </p>

                <ul className=" space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs">
                  <li>
                    App to track, rate, and share favorite reads with fellow
                    bookworms. Features AI chatbot.
                  </li>
                  <li>
                    Successfully routed React to Flask API to PostgreSQL and
                    back again, debugging with print statements
                  </li>
                  <li>
                    Handled current user by setting up Context variable and
                    browser local Storage
                  </li>
                  <li>
                    Frameworks: React, Flask (as REST API), PostgreSQL, Material
                    UI, APIs: OpenAI, Google, NY Times
                  </li>
                  <li> Languages: TypeScript, JSX, Python</li>
                </ul>

                <p className="md:mt-8 mt-4 lg:text-lg md:text-sm text-xs">
                  {" "}
                  Pokémon Battle App -{" "}
                </p>

                <ul className=" space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs">
                  <li>
                    Battle other Pokémon trainers and see whose team of six
                    Pokémon wins.
                  </li>
                  <li>
                    Solved many-to-many relationship using SQL join tables and a
                    backref
                  </li>
                  <li>
                    Frameworks: Flask, Flask-login, Flask-Migrate,
                    Flask-SQLAlchemy, PostgreSQL, Bootstrap, APIs: PokeAPI
                  </li>
                  <li>Languages: Python, HTML, Jinja</li>
                </ul>

                <p className="md:mt-8 mt-4 lg:text-lg md:text-sm text-xs">
                  Weather Forecast App –
                </p>
                <ul className=" space-y-2 list-disc list-inside lg:text-lg md:text-sm text-xs">
                  <li>
                    Obtains current weather and 5 day forecast for any city or
                    zipcode
                  </li>
                  <li>
                    Parsed abundance of JSON data using JavaScript Date object
                    and an algorithm
                  </li>
                  <li>Frameworks: Bootstrap, APIs: OpenWeather</li>
                  <li>Languages: JavaScript, HTML</li>
                </ul>
              </>
            )}

<div className="grid grid-cols-6 gap-3">
              <a href="" target="_blank" className="relative">
                <img
                  src={first}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4 "
                />
                <img
                  src={link}
                  alt="project0"
                  className="w-14 md:w-7 h-10 md:h-5 absolute right-0 bottom-0"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={sec}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>
              <a href="" target="_blank">

                <img
                  src={third}
                  alt="project0"
                  className="w-full md:w-auto h-full mt-4"
                />
              </a>

            </div>
            <div onClick={() => {
                setOpen2(!open2);
              }} className=" flex cursor-pointer flex-col items-center justify-center mt-5">
                {open2 && 
              <img src="/icons/up.svg" className="h-10 hover:h-12 duration-300" alt="" />}
              {!open2 && 
              <img src="/icons/down.svg" className="h-7 hover:h-9 duration-300" alt="" />}
            </div>
          </div> */}

          {/* third  */}
          {/* <div className="relative bg-[#151030] p-6 border rounded-xl my-5 text-lg">
            <div
              className="cursor-pointer lg:text-2xl md:text-xl text-sm mb-4 font-semibold text-head flex flex-row justify-between"
            >
              <h3>Amazon-Small Business Owner </h3>
              <h3 className="">Jan 2019 - Present</h3>
            </div>
            <p className="mt-2 lg:text-lg md:text-sm text-xs">
              Technologies: Titan tools, Helium, Atlas, app.titantools.com,
              google sheets, SOP
            </p>
            {open3 && (
              <>
                <ul className=" list-disc list-inside lg:text-lg md:text-sm text-xs">
                  <li>
                    Product Management and Optimization: Source reliable
                    products, manage inventory levels, create detailed product
                    listings with SEO optimization, and set competitive pricing
                    strategies while running promotions and discounts to attract
                    customers.
                  </li>
                  <li className="md:mt-8 mt-4">
                    Order Fulfillment and Customer Service: Ensure timely
                    processing and shipping of orders, and provide prompt,
                    professional customer service to handle inquiries and manage
                    feedback effectively.
                  </li>
                  <li className="md:mt-8 mt-4">
                    Marketing and Financial Management: Utilize Amazon’s
                    advertising tools and external marketing channels to drive
                    traffic and sales, maintain accurate financial records, and
                    ensure compliance with tax regulations.
                  </li>
                  <li className="md:mt-8 mt-4">
                    Analytics, Compliance, and Continuous Improvement: Monitor
                    sales data and key metrics to assess performance, adhere to
                    Amazon’s policies and product compliance standards, and stay
                    informed on marketplace trends to continuously adapt and
                    improve business strategies.
                  </li>
                  <p className="mt-5 lg:text-lg md:text-sm text-xs">
                    Sales Associate – Retail store{" "}
                    <span className="ml-10">Jan 2015 - Present</span>
                  </p>
                  <li>
                    Oversee daily store operations, staff management, and
                    customer service to ensure a welcoming environment.
                  </li>
                  <li>
                    Manage inventory, implement sales strategies, and optimize
                    finances for profitability. Plan marketing campaigns,
                    maintain safety standards, and engage with the community for
                    brand awareness and growth.
                  </li>
                  <li>
                    Delivers documentation on internal processes, research, with
                    local vendors by successfully managing multiple projects
                    with varying timelines and levels of priority, contributing
                    to achievement of the region’s annual goals
                  </li>
                </ul>
              </>
            )}
            <div onClick={() => {
                setOpen3(!open3);
              }} className=" flex cursor-pointer flex-col items-center justify-center mt-5">
                {open3 && 
              <img src="/icons/up.svg" className="h-10 hover:h-12 duration-300" alt="" />}
              {!open3 && 
              <img src="/icons/down.svg" className="h-7 hover:h-9 duration-300" alt="" />}
            </div>
          </div> */}

          {/* four */}
          {/* <div className="relative bg-[#151030] p-6 border rounded-xl my-5 text-lg"> */}
            {/* <div
              className="cursor-pointer lg:text-2xl md:text-xl text-sm mb-4 font-semibold text-head flex flex-row justify-between"
            >
              <h3>Desktop Support Technician - Regency Technologies </h3>
              <h3 className="">Jan 2018 - Dec 2019</h3>
            </div> */}
            {/* {open4 && ( */}
              <>
                {/* <ul className=" list-disc list-inside lg:text-lg md:text-sm text-xs">
                  <li>
                    I provided troubleshooting and repairing of systems with
                    hardware, applications, OS, and network problems
                  </li>
                  <li className="md:mt-8 mt-4">
                    I was also responsible for documenting ongoing functions by
                    creating and updating tickets in line with required plans.
                  </li>
                  <li className="md:mt-8 mt-4">
                    It was me who identified and resolved upcoming problems with
                    software, hardware, and network while ensuring applicable
                    technical support.
                  </li>
                  <li className="md:mt-8 mt-4">
                    Moreover, I delivered the support with phone calling and
                    other basic networking TCP\IP functions and transmitted
                    technical concepts to non-technical executives/managers for
                    technical workflow.
                  </li>
                  <li className="md:mt-8 mt-4">
                    Utilized team viewer app to scan antivirus, fix office
                    packages, and install software/apps.
                  </li>
                  <li>
                    Resolved various minor general and internet issues for
                    non-technical customers with phone connections.
                  </li>
                </ul> */}
              </>
            {/* )} */}
            {/* <div onClick={() => {
                setOpen4(!open4);
              }} className=" flex cursor-pointer flex-col items-center justify-center mt-5">
                {open4 && 
              <img src="/icons/up.svg" className="h-10 hover:h-12 duration-300" alt="" />}
              {!open4 && 
              <img src="/icons/down.svg" className="h-7 hover:h-9 duration-300" alt="" />}
            </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </section> */}

      {/* tech skllill */}
      {/* <h2 className={`${styles.sectionHeadText} text-[#00CEA8]`}>
        Tech Skills
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {technologies.map((technology) => (
          <div
            className="w-[5rem] h-[5rem] md:w-24 md:h-24 mt-4"
            key={`debug-${technology.name}`}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="rounded-xl"
            />
            <p className="md:text-lg text-sm  mt-2 text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>

      {/*  ediucation */}
      {/* <h2 className={`${styles.sectionHeadText} text-[#00CEA8] mt-20`}>
        Education
      </h2>
      <div className="mt-5 grid grid-cols-3 ">
        {services?.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};   

export default SectionWrapper(Tech, "");
