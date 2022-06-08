import React from "react";

import Banner from "../assets/img/imgHero.png";

import { navigation } from "../data";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side  */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">
              Hi, I'm Kimberly! 🙋🏻‍♀️{" "}
            </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] ">Full Stack Developer</h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I love being able to learn something everyday by engaging
              in experiments and working on projects. <br />
              <b><i>It's not only a job, is a passion.</i></b>
            </p>
            <Link to={navigation[3].href} activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className="transition-all duration-300">
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">Work with me</button>
            </Link>
          </div>

          {/* right side  */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={Banner} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
