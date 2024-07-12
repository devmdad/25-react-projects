import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ length = 5 }) {
  const [rated, setRated] = useState(null);
  const [hover, setHover] = useState(null);
  //   const [rated, setRated] = useState(null);

  const handleRating = (index) => {
    setRated(index);
  };

  const handleMouseMove = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(rated);
  };

  return (
    <div>
      <h1>Star Rating</h1>
      {[...Array(length)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            style={{
              fontSize: 24,
              padding: "2px",
              color: index <= (rated || hover) ? "yellow" : "gray",
            }}
            onClick={() => handleRating(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
