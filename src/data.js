//  icons
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

// projects images
import Project1 from "./assets/img/projects/pokemon.png";
import Project2 from "./assets/img/projects/lagruta.png";
import Project3 from "./assets/img/projects/tienda.png";
import Project4 from "./assets/img/projects/dashboard.png"
import Project5 from "./assets/img/projects/grutaLinea.png"
import Project6 from "./assets/img/projects/tiendaLirbos.png"
import Project7 from "./assets/img/projects/Captura de Pantalla 2023-10-13 a la(s) 04.31.43 p. m..png"

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

// 
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/sofia-parra-5a36b0205/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/sofiaparraweb",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Pokemon App",
    category: "Full Stack",
    href: "https://pi-pokemon-main-green.vercel.app/",
    description:
      "A full-stack application that allows users to search for Pokemons and create their own teams. You can filter, view details, and explore the Pokemon world!",
  },
  {
    id: "2",
    image: Project2,
    name: "La Gruta Foundation",
    category: "Full Stack",
    href: "https://lagrutaclient.vercel.app/",
    description:
      "This project was created as a final project for the Henry bootcamp. It was a great opportunity to help a foundation by developing an app for them. You can view their projects, shop in their store, create an account, and make donations!",
  },
  {
    id: "3",
    image: Project6,
    name: "E-commerce",
    category: "Full Stack",
    href: "https://bookverse-client.vercel.app/",
    description:
      "A complete online store. You can browse products, add them to your cart, proceed to checkout, and make purchases!. All managed by a fully functional dashboard",
  }
  
];

export const projectsNav = [
  {
    name: "all",
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
    description: "Email me at sofiaparraweb@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Vermont, United States",
    description: "Open to help you from around the world!",
  },
];
