import React from 'react';
import '../sass/main.css';

const NavBar = () => (
    <section className="navbar">
      <ul className="nav">
        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#About" className="nav__link">About</a></li>
        <li className="nav__item"><a href="#Project" className="nav__link">Projects</a></li>
        <li className="nav__item"><a href="d" className="nav__link">Blog</a></li>
      </ul>
    </section>
)

export default NavBar