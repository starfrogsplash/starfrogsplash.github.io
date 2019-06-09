import React, { Fragment } from "react";
import "../sass/main.css";
import LightSpeed from "react-reveal/LightSpeed";
import VisibilitySensor from "react-visibility-sensor";

const repeat = (item, num) => {
  const fireflys = [];
  for (let i = 0; i < num; i++) {
    fireflys.push(item);
  }
  return fireflys;
};


export const Header = () => (
  <section className="mainHeader">
    <div id="home" className="mainHeader__text">
      <LightSpeed left duration={2000}>
        <h1 className="mainHeader__text__name">Ali Khalil</h1>
      </LightSpeed>
      <LightSpeed left duration={2000} delay={600}>
        <h1 className="mainHeader__text__title">Full Stack Web Developer</h1>
      </LightSpeed>
    </div>
    <div className="fireflySet">{repeat(<div className="firefly" />, 25)}</div>
    <div id="about" className="aboutClipTop" />
  </section>
);
