import React from "react";
import Projects from "../Projects/Projects";
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary container-portfolio">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title">My latest work</h2>
          <p className='subtitle'>
            I like to learn new things and I'm always looking for new projects to work on. 
            So here I show you my projects. 
          </p>
        </div>
        <Projects /> 
      </div>
    </section>
  );
};

export default Portfolio;
