import React from 'react';
import '../sass/main.css';

const repeat = (item, num) => {
    const fireflys = [];
    for (let i = 0; i < num; i++){
       fireflys.push(item)
    }
    return fireflys
}

export const Header = () => (
    <section id="home" className="header">
    <div className="header__text">
      <h1 className="header__text__name">Ali Khalil</h1>
      <h1 className="header__text__title">Full Stack Web Developer</h1>
    </div>
    <div className="fireflySet">

    { repeat(<div className="firefly"></div>, 25)}

    </div>
    <div id="about" className="aboutClipTop"></div>
  </section>
)
