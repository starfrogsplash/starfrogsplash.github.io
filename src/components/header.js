import React , {Fragment}from "react";
import "../sass/main.css";
import LightSpeed from 'react-reveal/LightSpeed';
import VisibilitySensor from "react-visibility-sensor";

const repeat = (item, num) => {
  const fireflys = [];
  for (let i = 0; i < num; i++) {
    fireflys.push(item);
  }
  return fireflys;
};

export const Header = () => (
  <section  className="header">
    <div id="home" className="header__text">

        <VisibilitySensor>
            {({ isVisible }) => (
              <Fragment>
                <LightSpeed left when={isVisible} duration={2000}>
                <h1 className="header__text__name">Ali Khalil</h1>
                </LightSpeed>
                <LightSpeed right when={isVisible} duration={2000}>
                <h1 className="header__text__title">Full Stack Web Developer</h1>
                </LightSpeed>
              </Fragment>
            )}
      </VisibilitySensor>





    </div>
    <div className="fireflySet">{repeat(<div className="firefly" />, 25)}</div>
    <div id="about" className="aboutClipTop" />
  </section>
);
