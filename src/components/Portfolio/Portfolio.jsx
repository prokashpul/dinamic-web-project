import React from "react";
import "./Portfolio.css";
import JsonData from "../data/portfilio.json";
import Singleportfolio from "../Singleportfolio/Singleportfolio";

const Portfolio = () => {
  const portfolio = JsonData;
  return (
    <section className="container">
      <div className="portfolios-container">
        <h2>Our Top Portfolios</h2>
        <div className="portfolios">
          {portfolio.map((portfolioItem) => (
            <Singleportfolio
              portfolio={portfolioItem}
              key={portfolioItem.id}
            ></Singleportfolio>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
