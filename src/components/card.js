import React from "react";
import "../sass/main.css";

const Card = ({image, demoLink, githubLink}) => (
        <div className="card">
          <img src={image} alt="Coming-soon" className="card__image"/>
          <div className="card__name">
            Project Card 1
            <div className="card__name__line">&nbsp;</div>
          </div>
          <p className="card__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

          <div className="card__links">
              <a
                className="card__links__view"
                href={demoLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <p className="view">View Demo</p>
              </a>
              <a
                className="card__links__github"
                href={githubLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github" aria-hidden="true"> </i>
              </a>
          </div>
        </div>
);

export default Card;
