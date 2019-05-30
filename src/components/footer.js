import React from 'react';
import '../sass/main.css';

const Footer = () => (
  <footer className="footer">
  <div className="social-links">
    <a
      className="social-links__item"
      href="https://www.linkedin.com/in/ali-khalil-81100840/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-linkedin"></i>
    </a>
    <a
      className="social-links__item"
      href="https://github.com/starfrogsplash/"
      rel="noopener noreferrer"
      target="_blank"
    >
      <i className="fab fa-github" aria-hidden="true"> </i>
    </a>
  </div>
</footer>
)

export default Footer