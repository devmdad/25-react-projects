import React, { useEffect, useState } from "react";
import data from "./data";
// import "./styles.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [multiSelection, setMultiSelection] = useState(false);

  const handleSelected = (id) => {
    selected !== id ? setSelected(id) : setSelected(null);
  };

  const handleMultiSelection = (id) => {
    console.log("before", multiple);

    const cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);
    findIndexOfCurrentId === -1
      ? cpyMultiple.push(id)
      : cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);

    console.log("after", multiple);
  };

  // useEffect(() => {
  //   // handleMultiSelection();
  // }, [multiple]);

  return (
    <div className="container">
      <div className="btn-container">
        <button className="btn" onClick={() => setMultiSelection(true)}>
          Enable Multi-Selection
        </button>
      </div>
      <div className="accordion">
        {data.map((item) => (
          <div className="item">
            <div
              className="title"
              onClick={
                multiSelection
                  ? () => handleMultiSelection(item.id)
                  : () => handleSelected(item.id)
              }
            >
              <h2 className="question">{item.question}</h2>
              <span className="icon">+</span>
            </div>
            {multiSelection
              ? multiple.map(
                  (id) =>
                    id === item.id && <p className="answer">{item.answer}</p>
                )
              : item.id === selected && <p className="answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
