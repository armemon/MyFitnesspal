import React, { useState } from "react";
import "./FoodCaloriesCalculator.css"; // Import CSS file

const FoodCaloriesCalculator = () => {
  const [selectedFood, setSelectedFood] = useState("");
  const [calories, setCalories] = useState(0);

  const handleFoodChange = (e) => {
    const food = e.target.value;
    setSelectedFood(food);

    // Perform calorie calculation based on selected food
    let calories = 0;
    switch (food) {
      case "nasi-lemak":
        calories = 644;
        break;
      case "roti-canai":
        calories = 301;
        break;
      case "char-kway-teow":
        calories = 744;
        break;
      case "satay":
        calories = 360;
        break;
      case "Apple":
        calories = 52;
        break;
      case "Banana":
        calories = 96;
        break;
      case "Orange":
        calories = 43;
        break;
      case "Carrot":
        calories = 41;
        break;
      // Add more cases for other foods
      default:
        calories = 0;
        break;
    }

    setCalories(calories);
  };

  return (
    <div className="food-calories-container">
      <h2 className="calculator-title">Food Calories Calculator</h2>
      <div className="form-group">
        <label>Select a food:</label>
        <select
          value={selectedFood}
          onChange={handleFoodChange}
          className="food-select"
        >
          <option value="">-- Select Food --</option>
          <option value="nasi-lemak">Nasi Lemak</option>
          <option value="roti-canai">Roti Canai</option>
          <option value="char-kway-teow">Char Kway Teow</option>
          <option value="satay">Satay</option>
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Orange">Orange</option>
          <option value="Carrot">Carrot</option>
          {/* Add more options for other foods */}
        </select>
      </div>
      {calories > 0 && (
        <div className="calories-info">
          <p>
            Selected Food: <span>{selectedFood}</span>
          </p>
          <p>
            Calories: <span>{calories}</span> kcal
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodCaloriesCalculator;
