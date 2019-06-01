import React, { Fragment } from "react";
import "../sass/main.css";
import BioPicture from "../image/2018-Cover.jpg";
import cloudLogo from "../image/AWS_combined.png";
import prince2logo from "../image/Prince2.png";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

import VisibilitySensor from "react-visibility-sensor";

const About = () => (
  <section id="About" className="about">

        <LightSpeed left duration={1000} delay={100}>
          <div className="about__title__text">
            ABOUT
            <LightSpeed left  duration={1200} delay={600}>
              <div className="about__title__line">&nbsp;</div>
            </LightSpeed>
          </div>
        </LightSpeed>

    <Fade left duration={700} delay={200}>
      <img src={BioPicture} alt="BioPicture" className="about__bioPicture" />
    </Fade>

    <Fade left duration={800} delay={400}>
      <p className="about__description">
        After spending the first years of my professional career as a 3D artist
        for video games, I went through a period of intensive studying to
        retrain as a full-stack developer. Since that time, I have gained over a
        year's experience in the web development industry, and am learning and
        building my knowledge every day by continually updating my knowledge of
        current technology trends and tooling. I am a highly-motivated and
        enthusiastic team member, and always willing to improve myself and
        expand my capabilities.
      </p>
    </Fade>

    <div className="teckStack">
      <div className="teckStack__title">
        Tech Stack
        <div className="teckStack__title__line">&nbsp;</div>
      </div>

      <LightSpeed left cascade>
        <ol className="teckStack__list">
          <li className="teckStack__list__item">
            <a >React.js</a>
          </li>
          <li className="teckStack__list__item">
            <a >Node.js</a>
          </li>
          <li className="teckStack__list__item">
            <a >GraphQL</a>
          </li>
          <li className="teckStack__list__item">
            <a >MongoDB</a>
          </li>
          <li className="teckStack__list__item">
            <a >PostgreSQL</a>
          </li>
          <li className="teckStack__list__item">
            <a >HTML/CSS</a>
          </li>
        </ol>
      </LightSpeed>
    </div>

    <hr />

    <div className="cert">
      <div className="cert__logo">
        <img src={cloudLogo} alt="cloudLogo" className="cert__logo__image" />
      </div>

      <div className="cert__prince2_tag">
        <img
          src={prince2logo}
          className="cert__prince2_tag__image"
          alt="Prince2"
        />
      </div>
    </div>
  </section>
);

export default About;
