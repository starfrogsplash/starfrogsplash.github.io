import React from "react";
import NavBar from "./nav";
import About from "./about";
import Project from "./project";
import Footer from "./footer";
import { Header } from "./header";
import "../sass/main.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Header />
      <About />
      <div className="aboutClip" />
      <div id="Project" className="title">
        Projects
        <div className="title__line">&nbsp;</div>
      </div>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
