import React from "react";

import Image from "../../assets/img/IMG_1151.jpg";
import { navigation } from "../../data";
import { Link } from "react-scroll";
// import "./About.css"

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[400px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt="img_about"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Sofia Parra
              </h2>
              <p className="mb-4 text-accent">Full Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              Full Stack Developer focus on frontend development.
               I'm an enthusiastic individual with a strong passion for technology, 
              design, and innovation. While I may be relatively new to the programming 
              world, my drive to learn and dedication to improve are unwavering.  <br />
                <br />
                My focus lies in building and optimizing user-centered websites 
                and applications in a scalable and modular fashion. I thrive on 
                the excitement of exploring new concepts, tackling challenges, 
                and continuously expanding my knowledge. As a developer, 
                I prioritize effective problem-solving and collaboration, 
                always eager to contribute and learn from others.<br />
                <br />
                I have experience in JavaScript, HTML, CSS and also in 
                technologies like Node.js, Express, Sequelize, PostgreSQL, React.js, 
                Redux. VCS tool: Git. Use to the Scrum metodology
              </p>
            </div>
            <Link to={navigation[3].href} activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

