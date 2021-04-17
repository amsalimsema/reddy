import React from "react";
import About from "./About";
import Landing from "./Landing";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <div id="home">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
