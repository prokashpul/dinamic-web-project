import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="container">
      <div className="portfolios-container">
        <h2>Our Top Portfolios</h2>
        <div className="portfolios">
          <article className="portfolio">
            <div className="portfolio-img">
              <img
                src="https://cdn.pixabay.com/photo/2014/08/01/17/56/ipad-407799_1280.jpg"
                alt=""
              />
            </div>
            <div className="portfolio-body">
              <h3>Responsive wib site</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                natus voluptates, nemo debitis pariatur praesentium mollitia
                harum beatae officiis, dolorem ad dignissimos obcaecati itaque
                libero vitae? Temporibus consectetur distinctio dignissimos!
              </p>
              <a href="/home" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio">
            <div className="portfolio-img">
              <img
                src="https://cdn.pixabay.com/photo/2015/05/31/15/18/technology-792180_1280.jpg"
                alt=""
              />
            </div>
            <div className="portfolio-body">
              <h3>Graphic designer</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                natus voluptates, nemo debitis pariatur praesentium mollitia
                harum beatae officiis, dolorem ad dignissimos obcaecati itaque
                libero vitae? Temporibus consectetur distinctio dignissimos!
              </p>
              <a href="/home" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
          <article className="portfolio">
            <div className="portfolio-img">
              <img
                src="https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg"
                alt=""
              />
            </div>
            <div className="portfolio-body">
              <h3>Social marketing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                natus voluptates, nemo debitis pariatur praesentium mollitia
                harum beatae officiis, dolorem ad dignissimos obcaecati itaque
                libero vitae? Temporibus consectetur distinctio dignissimos!
              </p>
              <a href="/home" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
