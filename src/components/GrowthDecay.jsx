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
      setResult(`${finalValue.toFixed(2)}`);
    } else {
      setResult('Invalid Input');
    }
  };

  return (
    <div className='flex justify-center items-center flex-col gap-10 pt-10'>
      <h2 className='text-6xl font-bold text-red-600 pb-10'>GROWTH AND DECAY</h2>
      <p className='text-center text-red-400 text-2xl font-semibold scroll -mt-16 pb-5'>Input given values:</p>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-6 flex'>
          Initial Value (P0):
          <input  className='text-black font-normal border border-black text-center'
            type="number"
            value={P0}
            onChange={(e) => setP0(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-6 flex'>
          Rate Constant (k):     
          <input className='text-black font-normal border border-black text-center'
            type="number"
            step="0.000001"
            value={k}
            onChange={(e) => setK(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-6 flex'>
          Time Variable (t):
          <input  className='text-black font-normal border border-black text-center'
            type="number"
            value={t}
            onChange={(e) => setT(e.target.value)}
          />
        </label>
      </div>
      <button className='bg-red-600 px-5 py-1 text-white font-semibold rounded-md text-xl' onClick={solveEquation}>Solve</button>
      <div className='bg-red-600 text-white w-96 text-center py-5 mb-10 text-xl font-bold flex justify-center gap-4'> Answer : 
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default SeparableVariable;
