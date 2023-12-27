import React, { useState } from "react";
import NewTemp from "./newtonlaw/NewTemp";
import Newtime from "./newtonlaw/Newtime";

function Newton() {
  const [category, setCategory] = useState("temperature"); // Changed variable name to be more descriptive

  // Conditionally render components based on the selected value
  const renderComponent = () => {
    switch (category) {
      case "temperature":
        return <NewTemp />;
      case "time":
        return <Newtime />;
      default:
        return null;
    }
  };

  return (
    <>
      <h2 id="newton" className="text-center lg:text-5xl font-bold text-red-600 pt-32 pb-10 items-center justify-center text-3xl">
        NEWTON'S LAW COOLING/HEATING
      </h2>

      <div className="flex items-center justify-center">
        <select
          name="category" // Changed name to be more descriptive
          id="categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ border: "1px solid black" }}
        >
          <option value="temperature">Temperature</option>
          <option value="time">Time</option>
        </select>
      </div>

      {/* Conditionally render the selected component */}
      {renderComponent()}
    </>
  );
}

export default Newton;
