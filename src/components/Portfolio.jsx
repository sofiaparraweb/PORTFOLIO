import React from "react";
import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center ">
            <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block">My latest work</h2>
            <p className='subtitle'>
            I like to learn new things and I'm always looking for new projects to work on. 
            So here I show you some of my latest projects. 
          </p>
        </div>
        <Projects /> 
      </div>
    </section>
  );
};

export default Portfolio;
