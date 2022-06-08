import React from "react";

import Image from "../assets/img/about.JPG";
import { navigation } from "../data";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[250px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt="img_about"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Kimberly Blandon
              </h2>
              <p className="mb-4 text-accent">Full Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                👩🏻‍💻Full Stack Developer with the ability to build and optimize
                end-user-oriented web sites and applications in a scalable and
                modularized manner <br />
                <br />
                📖✏️I love to investigate, solve problems, learn from others and
                teach, that is why in me you will find a developer with conflict
                resolution skills, willing to listen to ideas and contribute all
                my knowledge to achieve the proposed objectives. <br />
                <br />
                I have experience in JavaScript language, HTML, CSS and also in technologies like Node.js, Express, Sequelize, PostgreSQL, React.js, Redux. VCS tool: Git.
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
