import { composition } from 'mathjs';
import React, { useState } from 'react';

function SeparableVariable() {
  const [P0, setP0] = useState('');
  const [pt, setPt] = useState('');
  const [t, setT] = useState('');
  const [t2, setT2] = useState('');
  const [result, setResult] = useState(null);
  const [k, setK] = useState(null);
  const [dp, setDp] = useState(null);
  const [showSolution, setShowSolution] = useState(false); // New state

  const solveEquation = () => {
    const initial = parseFloat(P0);
    const pt2 = parseFloat(pt);
    const time = parseFloat(t);
    const time2 = parseFloat(t2);

    if (!isNaN(initial) && !isNaN(pt2) && !isNaN(time)) {
      const constant =  Math.log(pt2 / initial) / time;
      const finalValue =  initial * Math.exp(constant * time2);
      const dpdt = initial * constant * Math.exp(constant * time2); 
      setResult(`Population: ${finalValue.toFixed(3)}`);
      setK(`Rate Constant (k): ${constant.toFixed(10)}`);
      setDp(`dP/dt: ${dpdt.toFixed(3)} per year`);
      setShowSolution(true); // Set showSolution to true when the button is clicked

    } else {
      setResult('Invalid Input');
      setK('Invalid Input');
      setDp('Invalid Input');
      setShowSolution(false); // Set showSolution to true when the button is clicked

    }
  };

  return (
    <div id='growth' className='flex items-center justify-center flex-col gap-10 pt-10 px-20'>
      <p className='text-center text-red-400 text-xl font-semibold scroll  pb-5'>Given:</p>
      <div className='gap-10 flex flex-col lg:flex lg:flex-row justify-center items-center'>
      <div>
      <label className='text-lg font-semibold text-red-400 gap-3 flex flex-col lg:flex lg:flex-row'>
          @t(years):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
          />
        </label>
      </div>
      <div>
      <label className='text-lg font-semibold text-red-400 gap-3 flex flex-col lg:flex lg:flex-row'>
          Initial Value (P0):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={P0}
            onChange={(e) => setP0(e.target.value)}
          />
        </label>
      </div>
      </div>
   <div className='gap-10 flex flex-col lg:flex lg:flex-row justify-center items-center'>
    
     
      <div>
      <label className='text-lg font-semibold text-red-400 gap-3 flex flex-col lg:flex lg:flex-row'>
          @t (years):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={t}
            onChange={(e) => setT(e.target.value)}
          />
        </label>
      </div>
      <div>
      <label className='text-lg font-semibold text-red-400 gap-3 flex flex-col lg:flex lg:flex-row'>
          Population at the time (Pt):
          <input
          className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={pt}
            onChange={(e) => setPt(e.target.value)}
          />
        </label>
      </div>
      </div>
      <p className=' text-red-400 text-xl font-semibold scroll  pb-5'>Req'd:</p>
      <div className='gap-10 flex flex-col lg:flex lg:flex-row justify-center items-center'>
     

      <div>
      <label className='text-lg font-semibold text-red-400 gap-3 flex flex-col lg:flex lg:flex-row'>
          @t (years):
          <input
            className='text-black font-normal border border-black text-center min-w-[150px] max-w-full'
            type="number"
            value={t2}
            onChange={(e) => setT2(e.target.value)}
          />
        </label>
      </div>

      <div>
        <p className='text-xl font-bold text-red-500'>P = ?</p>
      </div>
     </div>
      <button className='bg-red-600 px-5 py-1 flex justify-center items-center text-white font-semibold rounded-md text-xl' onClick={solveEquation}>Solve</button>
      <div className='rounded-xl bg-red-600 text-white min-w-[250px] md:min-w-[600px] lg:min-w-[600px] max-w-full text-center py-5 mb-10 text-xl font-bold flex flex-col justify-center gap-4 '> 
      
      <div className={`solution ${showSolution ? 'visible' : 'hidden'}`}> 
         <div className='flex flex-col justify-center gap-10 pb-10 pt-10 sm:text-lg'>
              <div className='flex gap-10  justify-center'>
                <p>Given: </p>
                <p>{`@t = 0,  P= ${P0}`} <br></br>
                   {`@t = ${t}, P = ${pt}`}
                </p>
              </div>
              <div className='flex gap-10  justify-center'>
                <p>Req'd: </p>
                <p>{`@t = ${t2}, P = ?`}
                </p>
              </div>
              <div className='flex gap-10  justify-center'>
                <p>Sol'n: </p>
                <p>{`@t = ${t}, P = ${pt}`} <br />
                   {` P = ce^kt `}<br/>
                {`${pt} = ${P0}e^k(${t}), k = ?`}<br/>
                {`P = ${P0}e^k(${t2}), P = ?`}
                </p>
              </div>
         </div>
       </div> 

        <div>
          {k && <p>{k}</p>}
        </div>

        <div>
          {result && <p> {result} </p>} 
          
        </div>

        {/* <div>
          {dp && <p> {dp}</p>}
        </div> */}

      </div>
    </div>
  );
}

export default SeparableVariable;


// {`==> Given: @t = 0,  P= ${P0}`} <br></br>
// {`@t = ${t}, P = ${pt}`}<br></br>
// {`==> Req'd: @t = ${t2}, P = ?`}<br></br>
// {`==> Sol'n: P = ce^kt `} <br></br>
// {`@t = ${t}, P = ${pt}`}<br></br>
// {`${pt} = ${P0}e^k(${t})`}