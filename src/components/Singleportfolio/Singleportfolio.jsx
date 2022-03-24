import React from "react";
import "./Singleporttfolio.css";
const Singleportfolio = (props) => {
  const { image, name, details, url } = props.portfolio;
  return (
    <article className="portfolio">
      <div className="portfolio-img">
        <img src={image} alt="" />
      </div>
      <div className="portfolio-body">
        <h3>{name}</h3>
        <p>{details}</p>
        <a href={url} className="btn btn-primary">
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default Singleportfolio;
