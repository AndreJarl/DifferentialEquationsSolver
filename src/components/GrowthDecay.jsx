import React, { useState } from 'react';

function SeparableVariable() {
  const [P0, setP0] = useState('');
  const [pt, setPt] = useState('');
  const [t, setT] = useState('');
  const [t2, setT2] = useState('');
  const [result, setResult] = useState(null);
  const [k, setK] = useState(null);

  const solveEquation = () => {
    const initial = parseFloat(P0);
    const pia = parseFloat(pt);
    const time = parseFloat(t);
    const time2 = parseFloat(t2);

    if (!isNaN(initial) && !isNaN(pia) && !isNaN(time)) {
      const constant =  Math.log(pia / initial) / time;
      const finalValue = initial * Math.exp(constant * time);
      setResult(`Final Value: ${finalValue.toFixed(2)}`);
      setK(`Rate Constant (k): ${constant}`);
    } else {
      setResult('Invalid Input');
      setK('Invalid Input');
    }
  };

  return (
    <div className='flex justify-center items-center flex-col gap-10 pt-10'>
      <h2 className='text-6xl font-bold text-red-600 pb-10'>GROWTH AND DECAY</h2>
      <p className='text-center text-red-400 text-2xl font-semibold scroll -mt-16 pb-5'>Input given values:</p>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-6 flex'>
          Initial Value (P0):
          <input
            className='text-black font-normal border border-black text-center'
            type="number"
            value={P0}
            onChange={(e) => setP0(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-6 flex'>
          Population at the time (Pt):
          <input
            className='text-black font-normal border border-black text-center'
            type="number"
            value={pt}
            onChange={(e) => setPt(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-6 flex'>
          Time Variable (t):
          <input
            className='text-black font-normal border border-black text-center'
            type="number"
            value={t}
            onChange={(e) => setT(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-6 flex'>
          Time req (t2):
          <input
            className='text-black font-normal border border-black text-center'
            type="number"
            value={t2}
            onChange={(e) => setT2(e.target.value)}
          />
        </label>
      </div>

      <button className='bg-red-600 px-5 py-1 text-white font-semibold rounded-md text-xl' onClick={solveEquation}>Solve</button>
      <div className='bg-red-600 text-white w-96 text-center py-5 mb-10 text-xl font-bold flex flex-col justify-center gap-4'> 
    
        <div>
          {k && <p>{k}</p>}
        </div>

        <div>
          {result && <p> {result}</p>}
        </div>
        
      </div>
    </div>
  );
}

export default SeparableVariable;
