import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Catehories.css";
import {
  faBitcoinSign,
  faBullhorn,
  faComputer,
  faCookieBite,
  faDollarSign,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
const Categories = () => {
  return (
    <section className="category-container">
      <div className="container categories">
        <div className="category-left">
          <h2>Category</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            praesentium ex nemo beatae architecto iure optio amet assumenda
            saepe repellendus unde rerum veniam vel cupiditate modi, illum
            inventore nihil nesciunt!
          </p>
          <a href="/home" className="btn">
            Learn More
          </a>
        </div>
        <div className="category-right">
          <article className="category">
            <h5>
              <span className="category-icon">
                <FontAwesomeIcon icon={faBitcoinSign} />
              </span>
              Blockchain
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              autem quis eveniet qui voluptatem.
            </p>
          </article>
          <article className="category">
            <h5>
              <span className="category-icon">
                <FontAwesomeIcon icon={faComputer} />
              </span>
              Web Development
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              autem quis eveniet qui voluptatem.
            </p>
          </article>
          <article className="category">
            <h5>
              <span className="category-icon">
                <FontAwesomeIcon icon={faCookieBite} />
              </span>
              Graphic Design
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              autem quis eveniet qui voluptatem.
            </p>
          </article>
          <article className="category">
            <h5>
              <span className="category-icon">
                <FontAwesomeIcon icon={faDollarSign} />
              </span>
              Finance
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              autem quis eveniet qui voluptatem.
            </p>
          </article>
          <article className="category">
            <h5>
              <span className="category-icon">
                <FontAwesomeIcon icon={faBullhorn} />
              </span>
              Marketing
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              autem quis eveniet qui voluptatem.
            </p>
          </article>
          <article className="category">
            <h5>
              <span className="category-icon">
                <FontAwesomeIcon icon={faMusic} />
              </span>
              Music
            </h5>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              autem quis eveniet qui voluptatem.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Categories;
