import React from 'react';
import '../sass/main.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => (
    <section className="navbar">
      <ul className="nav">
       <li className="nav__item"><AnchorLink className="nav__link" href='#home'>home</AnchorLink></li>
        <li className="nav__item"><AnchorLink className="nav__link" href='#About'>About</AnchorLink></li>
        <li className="nav__item"><AnchorLink className="nav__link" href='#Project'>home</AnchorLink></li>
        <li className="nav__item"><a href="d" className="nav__link">Blog</a></li>
      </ul>
    </section>
)

export default NavBar