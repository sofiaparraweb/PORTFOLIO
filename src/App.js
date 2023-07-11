import React from "react";
import About from "./components/About/About";
import ButtonBack from "./components/ButtonBack/ButtonBack";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

// import components

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ButtonBack />
    </div>
  );
};

export default App;
