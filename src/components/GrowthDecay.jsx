import React, { useState } from 'react';

function SeparableVariable() {
  const [P0, setP0] = useState('');
  const [pt, setPt] = useState('');
  const [t, setT] = useState('');
  const [t2, setT2] = useState('');
  const [result, setResult] = useState(null);
  const [k, setK] = useState(null);
  const [dp, setDp] = useState(null);

  const solveEquation = () => {
    const initial = parseFloat(P0);
    const pia = parseFloat(pt);
    const time = parseFloat(t);
    const time2 = parseFloat(t2);

    if (!isNaN(initial) && !isNaN(pia) && !isNaN(time)) {
      const constant =  Math.log(pia / initial) / time;
      const finalValue =  initial * Math.exp(constant * time2);
      const dpdt = initial * constant * Math.exp(constant * time2); 
      setResult(`Population: ${finalValue.toFixed(3)}`);
      setK(`Rate Constant (k): ${constant.toFixed(5)}`);
      setDp(`dP/dt: ${dpdt.toFixed(3)}`);
    } else {
      setResult('Invalid Input');
      setK('Invalid Input');
      setDp('Invalid Input');
    }
  };

  return (
    <div id='growth' className='flex items-center justify-center flex-col gap-10 pt-28 mx-20'>
      <h2 className='text-center text-6xl font-bold text-red-600 pb-10'>GROWTH AND DECAY</h2>
      <p className='text-center text-red-400 text-2xl font-semibold scroll  pb-5'>Given:</p>
   <div className='gap-10 flex flex-col lg:flex lg:flex-row justify-center items-center'>
    
      <div>
        <label className='text-xl font-semibold text-red-400 gap-3 flex'>
          Initial Value (P0):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={P0}
            onChange={(e) => setP0(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-3 flex'>
          @t (years):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={t}
            onChange={(e) => setT(e.target.value)}
          />
        </label>
      </div>
      </div>
      <p className=' text-red-400 text-2xl font-semibold scroll  pb-5'>Req'd:</p>
      <div className='gap-10 flex flex-col lg:flex lg:flex-row justify-center items-center'>
      <div>
        <label className='text-xl font-semibold text-red-400 gap-3 flex'>
          Population at the time (Pt):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={pt}
            onChange={(e) => setPt(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label className='text-xl font-semibold text-red-400 gap-3 flex'>
          @t (years):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={t2}
            onChange={(e) => setT2(e.target.value)}
          />
        </label>
      </div>
     </div>
      <button className='bg-red-600 px-5 py-1 flex justify-center items-center text-white font-semibold rounded-md text-xl' onClick={solveEquation}>Solve</button>
      <div className='bg-red-600 text-white min-w-[350px] md:min-w-[600px] lg:min-w-[600px] max-w-full text-center py-5 mb-10 text-xl font-bold flex flex-col justify-center gap-4 '> 
    
        <div>
          {k && <p>{k}</p>}
        </div>

        <div>
          {result && <p> {result}</p>}
        </div>

        <div>
          {dp && <p> {dp}</p>}
        </div>

      </div>
    </div>
  );
}

export default SeparableVariable;

