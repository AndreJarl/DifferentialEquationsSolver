import React, { useState } from 'react';

function SeparableVariable() {
  const [P0, setP0] = useState(''); // Initial value
  const [k, setK] = useState(''); // Rate constant
  const [t, setT] = useState(''); // Time variable
  const [result, setResult] = useState(null);

  const solveEquation = () => {
    // Parse input values as numbers
    const initial = parseFloat(P0);
    const constant = parseFloat(k);
    const time = parseFloat(t);

    if (!isNaN(initial) && !isNaN(constant) && !isNaN(time)) {
      // You can write your own equation-solving logic here.
      // For a general separable variable equation, we can assume dP/dt = k * P.
      const finalValue = initial * Math.exp(constant * time);
      setResult(`Result: ${finalValue.toFixed(2)}`);
    } else {
      setResult('Invalid Input');
    }
  };

  return (
    <div>
      <h2>Separable Variable Equation Solver</h2>
      <div>
        <label>
          Initial Value (P0):
          <input
            type="number"
            value={P0}
            onChange={(e) => setP0(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Rate Constant (k):
          <input
            type="number"
            step="0.000001"
            value={k}
            onChange={(e) => setK(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Time Variable (t):
          <input
            type="number"
            value={t}
            onChange={(e) => setT(e.target.value)}
          />
        </label>
      </div>
      <button onClick={solveEquation}>Solve</button>
      <div>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default SeparableVariable;
