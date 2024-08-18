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
  api,
} from "../assets";
import { JS, PostgreSQL, Mongo, Node, ReactJs, API, Flutter, Dart, Python, Bootstrap, SQL, Jquery, Sqlite, Ex6 } from "../assets/icon";
import { python, flask } from "../assets/icons";
import {
  eight,
  firstImg,
  five,
  four,
  nine,
  second,
  seven,
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
    id: "home",
    title: "Home",
  },
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
    icon: Mongo,
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
    name: "Book Store App",
    link: "https://printnyou.com/",
    description:
      "Developed a web application named Browse Books Users can explore a wide range of books with detailed information about each title, including descriptions, prices, and availability.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
      {
        name: "API",
        icon: API,
      },
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "Django",
        icon: dj,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
    ],
    image: firstImg,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pokemon Game App",
    link: "https://weaghori.com/",
    description:
    "We built a Pokémon Battle web application that allows users to fetch Battle Data Users can input an opponent's name to fetch their Pokémon data and prepare for a battle.",
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
        name: "API",
        icon: API,
      },

      {
        name: "Node",
        icon: Node,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
    ],
    image: second,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather App",
    link: "https://alpino.store/",
    description:
      " We developed a feature-rich Weather Application designed to provide users with comprehensive weather information.",
    tags: [
      {
        name: "Flutter",
        icon: Flutter,
      },
      {
        name: "Dart",
        icon: Dart,
      },
      {
        name: "API",
        icon: API,
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
    name: "Cleaning Services",
    link: "https://github.com/Bikramai/Cleaning-Service-Site",
    description:
      "Omni Serve is an innovative web application designed For providing Cleaning Service Online , User can Order their Service Using Form Submission or Directly call to company.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "Django",
        icon: dj,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
    ],
    image: four,
    source_code_link: "https://github.com/Bikramai/Cleaning-Service-Site",
  },
  {
    name: "Parkinson Ai",
    link: "https://github.com/Bikramai/Parkinsonai-app",
    description:
      "PARKINSON is an innovative web application designed Detect the neurological diseases symtoms by sending voice through the restfull api so it detact the diseases against your voice.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "Django",
        icon: dj,
      },
      {
        name: "SQL",
        icon: SQL,
      },
      {
        name: "API",
        icon: API,
      },
    ],
    image: five,
    source_code_link: "https://github.com/Bikramai/Parkinsonai-app",
  },
  {
    name: "Accounting Service",
    link: "https://github.com/Bikramai/Online-Accounting-Service",
    description:
      " Online Insight Accounting is platform enables users to manage their taxes through various subscription plans offered annually. Users can also book appointments for callbacks to receive more information before purchasing a subscription.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "Django",
        icon: dj,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
    ],
    image: six,
    source_code_link: "https://github.com/Bikramai/Online-Accounting-Service",
  },

  {
    name: "Internship App",
    link: "https://github.com/Bikramai/Django-Interships-App",
    description:
      "Internease a web based application to facilitate students to get interships and organizations to get best internies.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "Jquery",
        icon: Jquery,
      },
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "Django",
        icon: dj,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
    ],
    image: seven,
    source_code_link: "https://github.com/Bikramai/Django-Interships-App",
  },
  {
    name: "Jokes App",
    link: "https://github.com/Bikramai/Node.js-Jokes-App",
    description:
      "Developed a web application named Jokes Application is single page, less and smart code application developed to make people smile on each click.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "Jquery",
        icon: Jquery,
      },
      {
        name: "Ex6",
        icon: Ex6,
      },
      {
        name: "Node",
        icon: Node,
      },
      {
        name: "SQlite3",
        icon: Sqlite,
      },
    ],
    image: eight,
    source_code_link: "https://github.com/Bikramai/Node.js-Jokes-App",
  },
  {
    name: "Online Accounting",
    link: "https://github.com/Bikramai/Online-Accounting-website",
    description:
      " This website serves as a comprehensive platform showcasing available apartments, their prices, images, location on Google Maps, and detailed project information.",
    tags: [
      {
        name: "JavaScript",
        icon: JS,
      },
      {
        name: "Bootstrap",
        icon: Bootstrap,
      },
      {
        name: "Python",
        icon: Python,
      },
      {
        name: "Django",
        icon: dj,
      },
      {
        name: "API",
        icon: API,
      },
      {
        name: "PostgreSQL",
        icon: PostgreSQL,
      },
    ],
    image: nine,
    source_code_link: "https://github.com/Bikramai/Online-Accounting-website",
  },
];

export { services, technologies, testimonials, projects };
