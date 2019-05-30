import React from "react";
import "../sass/main.css";
import BioPicture from '../image/2018-Cover.jpg'
import cloudLogo from '../image/AWS_combined.png'
import prince2logo from '../image/Prince2.png'

const About = () => (
  <section id="About" className="about">
    <div className="about__title__text">
      ABOUT
      <div className="about__title__line">&nbsp;</div>
    </div>

    <img
      src={BioPicture}
      alt="BioPicture"
      className="about__bioPicture"
    />
    <p className="about__description">
      After spending the first years of my professional career as a 3D artist
      for video games, I went through a period of intensive studying to retrain
      as a full-stack developer. Since that time, I have gained over a year's
      experience in the web development industry, and am learning and building
      my knowledge every day by continually updating my knowledge of current
      technology trends and tooling. I am a highly-motivated and enthusiastic
      team member, and always willing to improve myself and expand my
      capabilities.
    </p>

    <div className="teckStack">
      <div className="teckStack__title">
        Tech Stack
        <div className="teckStack__title__line">&nbsp;</div>
      </div>

      <ol className="teckStack__list">
        <li className="teckStack__list__item">
          <a href="">React.js</a>
        </li>
        <li className="teckStack__list__item">
          <a href="">Node.js</a>
        </li>
        <li className="teckStack__list__item">
          <a href="">GraphQL</a>
        </li>
        <li className="teckStack__list__item">
          <a href="">MongoDB</a>
        </li>
        <li className="teckStack__list__item">
          <a href="">PostgreSQL</a>
        </li>
        <li className="teckStack__list__item">
          <a href="">HTML/CSS</a>
        </li>
      </ol>
    </div>

    <hr />

    <div className="cert">
      <div className="cert__logo">
        <img
          src={cloudLogo}
          alt="cloudLogo"
          className="cert__logo__image"
        />
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
