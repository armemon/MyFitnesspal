import React, { useState } from "react";
import "./BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBMIResult] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmi = weight / ((height / 100) ** 2);
      setBMIResult(bmi.toFixed(2));
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBMIResult(null);
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>

      <div className="input-group">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button onClick={calculateBMI}>Calculate BMI</button>
        <button onClick={resetCalculator}>Reset</button>
      </div>

      {bmiResult && (
        <div className="result">
          <h3>Your BMI Result:</h3>
          <p>{bmiResult}</p>
        </div>
      )}
    </div>
  );
};

export default BMI;
