import React from "react";
import NavBar from "./nav";
import About from "./about";
import Project from "./project";
import Footer from "./footer";
import Contact from './contact'
import { Header } from "./header";
import "../sass/main.css";
import LightSpeed from "react-reveal/LightSpeed";

const App = () => (
  <div className="container">
    <NavBar />
    <Header />
    <About />
    <div className="aboutClip" />
    <a
    className="social-links__item"
    href="https://github.com/starfrogsplash/"
    rel="noopener noreferrer"
    target="_blank"
  >
    <i className="fab fa-github" aria-hidden="true"> </i>
  </a>

    
    <LightSpeed left duration={1000} delay={100}>
      <div id="Project" className="title">
        Projects
        <LightSpeed left duration={1200} delay={600}>
          <div className="title__line">&nbsp;</div>
        </LightSpeed>
      </div>
    </LightSpeed>

    <Project />
    <Contact />
    <Footer />
  </div>
);

export default App;
