//  icons
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";

import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/CSS.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/redux.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/postgresql.png";

export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/kimberly-blandon/?locale=en_US",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/Kimblag",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Countries App",
    category: "Full Stack",
    href: "https://countries-main-app.vercel.app/",
    description:
      "A full stack application that allows users to search for countries and view their information.",
  },
  {
    id: "2",
    image: Project2,
    name: "Shoes e-commerce",
    category: "Full Stack",
    href: "https://e-commerce-five-mu.vercel.app/",
    description:
      "This PERN application allows users to create an account, login, and view their cart. It is based on the Final Project that my work group and I made for Henry bootcamp. I wanted to improve my frontend skills by redoing it.",
  },
  {
    id: "3",
    image: Project3,
    name: "My Shop Online",
    category: "Full stack",
    href: "https://my-shop-online.vercel.app/",
    description:
      "This application is an ecommerce in which user can register, login, search products, add products to favorites / cart, recover passwords, verify user account. It was made it with TypeScript, Node.js, Express, MongoDB, React, Redux Toolkit",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Full Stack",
  },
  {
    name: "Frontend",
  },
  {
    name: "Backend",
  },
  // {
  //   name: 'Mobile Development',
  // },
];

export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at kimberly.blandong@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Buenos Aires, Argentina",
    description: "Serving clients worldwide",
  },
];
