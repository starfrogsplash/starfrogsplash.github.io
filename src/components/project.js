import React from "react";
import "../sass/main.css";
import comingSoon from "../image/coming-soon.png";
import Card from "../components/card";
import Fade from "react-reveal/Fade";

const Project = () => (
  <div className="projects">

    <Fade left duration={700} delay={100}>
      <Card
        image={comingSoon}
        demoLink={"https://www.linkedin.com/in/ali-khalil-81100840/"}
        githubLink={"https://github.com/starfrogsplash/"}
      />
    </Fade>
    <Fade left duration={1500} delay={200}>
      <Card
        image={comingSoon}
        demoLink={"https://www.linkedin.com/in/ali-khalil-81100840/"}
        githubLink={"https://github.com/starfrogsplash/"}
      />
    </Fade>
    <Fade left duration={2000} delay={400}>
      <Card
        image={comingSoon}
        demoLink={"https://www.linkedin.com/in/ali-khalil-81100840/"}
        githubLink={"https://github.com/starfrogsplash/"}
      />
    </Fade>
  </div>
);

export default Project;
