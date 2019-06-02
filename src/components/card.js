import React from "react";
import "../sass/main.css";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 30,
  (x - window.innerWidth / 2) / 30,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Card = ({ image, demoLink, githubLink }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className="card">
        <img src={image} alt="Coming-soon" className="card__image" />
        <div className="card__name">
          Project Card 1<div className="card__name__line">&nbsp;</div>
        </div>
        <p className="card__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

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
            <i className="fab fa-github" aria-hidden="true">
              {" "}
            </i>
          </a>
        </div>
      </div>
    </animated.div>
  );
};

export default Card;
