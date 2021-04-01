import React from "react";
import About from "./About";
import Landing from "./Landing";
import Projects from "./Projects";
import Services from "./Services";
import Team from "./Team";

export default function Home() {
  return (
    <>
      <Landing />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="team">
        <Team />
      </div>
    </>
  );
}
