import React from "react";
import "../sass/main.css";
import comingSoon from '../image/coming-soon.png'
import Card from '../components/card'

const Project = () => (
  <div className="projects">
    <Card image={comingSoon} demoLink={'https://www.linkedin.com/in/ali-khalil-81100840/'} githubLink={'https://github.com/starfrogsplash/'}/>
    <Card image={comingSoon} demoLink={'https://www.linkedin.com/in/ali-khalil-81100840/'} githubLink={'https://github.com/starfrogsplash/'}/>
    <Card image={comingSoon} demoLink={'https://www.linkedin.com/in/ali-khalil-81100840/'} githubLink={'https://github.com/starfrogsplash/'}/>
    <Card image={comingSoon} demoLink={'https://www.linkedin.com/in/ali-khalil-81100840/'} githubLink={'https://github.com/starfrogsplash/'}/>    
  </div> 
);

export default Project;
