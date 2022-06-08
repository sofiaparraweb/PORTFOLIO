//  icons
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';



// projects images
import Project1 from './assets/img/projects/p1.png';


import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/CSS.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/redux.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/postgresql.png';


export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/kimberly-blandon/?locale=en_US',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Kimblag',
  },
];


// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Countries App',
    category: 'Full Stack',
    href: 'https://countries-main-app.vercel.app/',
    description: 'A full stack application that allows users to search for countries and view their information.',
  },
  // {
  //   id: '2',
  //   image: Project2,
  //   name: 'project name 2',
  //   category: 'Frontend',
  // },
  // {
  //   id: '3',
  //   image: Project3,
  //   name: 'project name 3',
  //   category: 'Backend',
  // },
  // {
 
];


export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'Full Stack',
  },
  {
    name: 'Frontend',
  },
  {
    name: 'Backend',
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
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at kimberly.blandong@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Buenos Aires, Argentina',
    description: 'Serving clients worldwide',
  },
];
