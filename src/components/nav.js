import React from 'react';
import '../sass/main.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => (
    <section className="navbar">
      <ul className="nav">
       <li className="nav__item"><AnchorLink className="nav__link" href='#home'>home</AnchorLink></li>
        <li className="nav__item"><AnchorLink className="nav__link" href='#About'>About</AnchorLink></li>
        <li className="nav__item"><AnchorLink className="nav__link" href='#Project'>Project</AnchorLink></li>
        <li className="nav__item"><AnchorLink className="nav__link" href='#Contact'>Contact</AnchorLink></li>
      </ul>
    </section>
)

export default NavBar