import React, { useState } from "react";

function Faqs({ questionAnswer }) {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    return setSelected(i);
  };

  return (
  <div className="faqs">
    <div className="box">
      <h4 className="text">FAQs</h4>
      {questionAnswer.map((eachItem, i) => (
        <div>
          <div className="container">
            <div className="question">
              {eachItem.question}
              <span className="plus" onClick={() => toggle(i)}>
                {selected === i ? "-" : "+"}
              </span>{" "}
            </div>
            <div className={selected === i ? "show" : "Answer"}>
              {eachItem.Answer}
            </div>
          </div>
        </div>
      ))}
    </div>
   
    </div>
  );
}

export default Faqs;
