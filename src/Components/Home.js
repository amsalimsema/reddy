import React from "react";
import About from "./About";
import Landing from "./Landing";
import Projects from "./Projects";
import Services from "./Services";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Projects />
    </>
  );
}
