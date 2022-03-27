import React, { useState } from "react";
import "./Singleans.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Singleans = ({ faq }) => {
  const [show, setShow] = useState(false);
  const { qus, ans } = faq;
  return (
    <div className="faq" onClick={() => setShow(!show)}>
      <div className="icon">
        {show ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </div>
      <div className="answer">
        <h4>{qus}</h4>
        {show && <p>{ans}</p>}
      </div>
    </div>
  );
};

export default Singleans;
