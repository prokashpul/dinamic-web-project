import React from "react";
import "./Headercontainer.css";
import pic from "../images/cherry-students.png";
const Headercontainer = () => {
  return (
    <section className="container header-container">
      <div className="header-container-left">
        <h1>Grow your skills to advantage your career path </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          praesentium error nam autem officia, deserunt nesciunt aut quis
          delectus quae cumque nulla sequi quas illum consequuntur quaerat saepe
          inventore harum earum. Explicabo voluptatum error magni fugiat ut
          fugit. Atque, quia est. Totam vitae dignissimos labore omnis ut alias
          repudiandae repellat.
        </p>
        <a href="/home" className="btn btn-primary">
          Learn More
        </a>
      </div>
      <div className="header-container-right">
        <img src={pic} alt="" />
      </div>
    </section>
  );
};

export default Headercontainer;
