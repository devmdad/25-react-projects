import React, { useState } from "react";
// import "./styles.css";

function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [hexColor, setHexColor] = useState("#000000");
  const [rgbColor, setRgbColor] = useState("(255, 255, 255)");

  const randomGeneratorUtility = (len) => {
    return Math.floor(Math.random() * len);
  };

  const handleGenerateHexColor = () => {
    setTypeOfColor("hex");
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += hex[randomGeneratorUtility(hex.length)];
    }
    setHexColor(randomColor);
  };

  const handleGenerateRgbColor = () => {
    setTypeOfColor("rgb");
    const r = randomGeneratorUtility(256);
    const g = randomGeneratorUtility(256);
    const b = randomGeneratorUtility(256);

    const RandomRgb = `rgb(${r}, ${g}, ${b})`;
    console.log(RandomRgb);
    setRgbColor(RandomRgb);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: typeOfColor === "hex" ? hexColor : rgbColor,
        }}
      >
        <h1>Random Color Generator</h1>
        <h2>
          {typeOfColor === 'hex' && typeOfColor} {typeOfColor === "hex" ? hexColor : rgbColor}
        </h2>
        <div className="btn-container">
          <button className="btn" onClick={handleGenerateHexColor}>
            Generate Hex Color
          </button>
          <button className="btn" onClick={handleGenerateRgbColor}>
            Generate RGB Color
          </button>
        </div>
      </div>
    </div>
  );
}

export default RandomColorGenerator;
