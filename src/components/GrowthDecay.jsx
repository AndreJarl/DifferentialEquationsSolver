import React, { useState } from "react";
import Ginitial from "./Ginitial";
import Gtime from "./Gtime";
import Population from "./Population";

function GrowthDecay() {
  const [cate, setCate] = useState("population"); // Add state for the selected value

  // Conditionally render components based on the selected value
  const renderComponent = () => {
    switch (cate) {
      case "population":
        return <Population />;
      case "initial":
        return <Ginitial />;
      case "time":
        return <Gtime />;
      default:
        return null;
    }
  };

  return (
    <>
      <h2 className='text-center text-6xl font-bold text-red-600 pt-12 pb-10'>GROWTH AND DECAY</h2>

      <div className="flex items-center justify-center">
        <select
          name="cate"
          id="categories"
          value={cate} // Set the value attribute for controlled component
          onChange={(e) => setCate(e.target.value)} // Handle onChange event
          style={{ border: '1px solid black' }} // Apply default border style

        >
          <option value="population">Population</option>
          <option value="initial">Initial Value/Population</option>
          <option value="time">Time</option>
        </select>
      </div>

      {/* Conditionally render the selected component */}
      {renderComponent()}
    </>
  );
}

export default GrowthDecay;
