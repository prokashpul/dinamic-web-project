import React from "react";
import Singleans from "../Singleans/Singleans";
import "./Answerquestion.css";
const Answerquestion = () => {
  const data = [
    {
      qus: "What is React?",
      ans: " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: 1,
    },
    {
      qus: "How to React work?",
      ans: " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: 2,
    },
    {
      qus: "What is React?",
      ans: " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: 3,
    },
    {
      qus: "What is React?",
      ans: " it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      id: 4,
    },
  ];
  return (
    <section className="faqs container">
      <h2>Question Answer Section</h2>
      <div className="faq-container">
        {data.map((faq) => (
          <Singleans faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default Answerquestion;
