import {
  mobile,
  backend,
  creator,
  web,
  // javascript,
  typescript,
  reactjs,
  nodejs,
  collage,
  degree,
  sertificate,
} from "../assets";
import { JS, Mongo, Node, ReactJs } from "../assets/icon";
import { python, flask } from "../assets/icons";
import {
  firstImg,
  five,
  four,
  second,
  six,
  thirdImg,
} from "../assets/portfolio";
import {
  bootstrap,
  c,
  dj,
  express,
  jquery,
  js,
  net,
  nosql,
  post,
  sql,
  sqlc,
} from "../assets/technology";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Coding Temple, Certificate - Software Engineering",
    icon: degree,
  },
  {
    title: "Google, Certificate - Data Analytics",
    icon: sertificate,
  },
  {
    title:
      "Fortis College (National Institute of Technology), Degree Associate -Computer Information Technology",
    icon: collage,
  },
  
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "c#",
    icon: c,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Express js",
    icon: express,
  },
  {
    name: "Jquery",
    icon: jquery,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Django",
    icon: dj,
  },

  {
    name: "PostgreSQL",
    icon: post,
  },
];

const testimonials = [
  {
    testimonial:
      "Utsav is very knowledgeable in the latest design trends and accommodating of new requests. Will definitely recommend him.",
    name: "Luhan",
    designation: "",
    company: "France",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "it was great working with him, excellent job, he over delivered more than I expected,",
    name: "Kibrom amaniel",
    designation: "COO",
    company: "Germany",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "great communication and great job.",
    name: "Toumani sumi",
    designation: "CTO",
    company: "Turkey",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Wealth Wave",
    link: "https://printnyou.com/",
    description:
      "Developed a web application named Wealth Wave allowing users to purchase monthly investment packages using cryptocurrency.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: firstImg,
    source_code_link: "https://github.com/",
  },
  {
    name: "Omni Group",
    link: "https://weaghori.com/",
    description:
      " Developed an innovative web application named 'Omni Group' for a construction com-pany specializing in apartment and land sales.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: second,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Insight Accounting",
    link: "https://alpino.store/",
    description:
      " Developed a SaaS-based web application named 'Online Insight Accounting' for an accounting consultancy.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: thirdImg,
    source_code_link: "https://github.com/",
  },

  {
    name: "Omi Serve",
    link: "https://alpino.store/",
    description:
      "Developed 'Omi Serve,' an innovative web application for ordering general services online.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: four,
    source_code_link: "https://github.com/",
  },
  {
    name: "Omi Serve",
    link: "https://alpino.store/",
    description:
      "Developed a personal portfolio website using React with JavaScript to showcase my projects, skills, and experience.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },
      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: five,
    source_code_link: "https://github.com/",
  },
  {
    name: "Omni Group",
    link: "https://weaghori.com/",
    description:
      " Developed an innovative web application named 'Omni Group' for a construction com-pany specializing in apartment and land sales.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: second,
    source_code_link: "https://github.com/",
  },

  {
    name: "Green Path",
    link: "https://alpino.store/",
    description:
      "Developed an advanced money transfer web application named 'Green Path' using Python and Django.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: six,
    source_code_link: "https://github.com/",
  },

  {
    name: "Wealth Wave",
    link: "https://printnyou.com/",
    description:
      "Developed a web application named Wealth Wave allowing users to purchase monthly investment packages using cryptocurrency.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: firstImg,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Insight Accounting",
    link: "https://alpino.store/",
    description:
      " Developed a SaaS-based web application named 'Online Insight Accounting' for an accounting consultancy.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "React",
        icon: ReactJs,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "MongoBD",
        icon: Mongo,
      },
    ],
    image: thirdImg,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, testimonials, projects };
