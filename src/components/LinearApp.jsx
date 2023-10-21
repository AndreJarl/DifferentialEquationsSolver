import React, { useState } from 'react';

function App() {
  const [Q, setQ] = useState(0);
  const [initialAdditive, setInitialAdditive] = useState(100);
  const [inflowRate, setInflowRate] = useState(2);
  const [initialVolume, setInitialVolume] = useState(2000);
  const [time, setTime] = useState(20);

  const calculateAdditiveAmount = () => {
    // Calculate the amount of additive based on the user's input
    const Q = 2 * (initialVolume - 5 * time) - (3900 / 9) * (initialVolume - 5 * time);
    setQ(Q.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Linear Differential Equation Solver</h1>
      <div>
        <label>
          Initial Additive (lb):
          <input type="number" value={initialAdditive} onChange={(e) => setInitialAdditive(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Inflow Rate (lb/gal):
          <input type="number" value={inflowRate} onChange={(e) => setInflowRate(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Initial Volume (gallons):
          <input type="number" value={initialVolume} onChange={(e) => setInitialVolume(Number(e.target.value))} />
        </label>
      </div>
      <div>
        <label>
          Time (minutes):
          <input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} />
        </label>
      </div>
      <button onClick={calculateAdditiveAmount}>Calculate Additive Amount</button>
      <h2>Amount of Additive 20 minutes later:</h2>
      <div>{Q} lbs</div>
    </div>
  );
}

export default App;
