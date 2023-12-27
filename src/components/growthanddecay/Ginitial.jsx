import React, { useState } from 'react';

const Ginitial = () => {
  const [populationAtTime1, setPopulationAtTime1] = useState('');
  const [populationAtTime2, setPopulationAtTime2] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [initialPopulation, setInitialPopulation] = useState(null);
  const [showSolution, setShowSolution] = useState(false); // New state
  const [k, setK] = useState(null);

  const handlePopulationAtTime1Change = (e) => {
    setPopulationAtTime1(e.target.value);
  };

  const handlePopulationAtTime2Change = (e) => {
    setPopulationAtTime2(e.target.value);
  };

  const handleTime1Change = (e) => {
    setTime1(e.target.value);
  };

  const handleTime2Change = (e) => {
    setTime2(e.target.value);
  };

  const calculateInitialPopulation = () => {
    // Validate the inputs
    if (!populationAtTime1 || !populationAtTime2 || !time1 || !time2 || isNaN(parseFloat(populationAtTime1)) || isNaN(parseFloat(populationAtTime2)) || isNaN(parseFloat(time1)) || isNaN(parseFloat(time2))) {
      alert('Please enter valid values for populations and times.');
      setShowSolution(false); // Set showSolution to true when the button is clicked

      return;
    }

    // Convert inputs to numbers
    const parsedPopulationAtTime1 = parseFloat(populationAtTime1);
    const parsedPopulationAtTime2 = parseFloat(populationAtTime2);
    const parsedTime1 = parseFloat(time1);
    const parsedTime2 = parseFloat(time2);

    // Calculate growth rate constant (k)
    const k = Math.log(parsedPopulationAtTime2 / parsedPopulationAtTime1) / (parsedTime2 - parsedTime1);

    // Calculate initial population (P0)
    const calculatedInitialPopulation = parsedPopulationAtTime1 / Math.exp(parsedTime1 * k);
    setK(k.toFixed(10));
    setInitialPopulation(calculatedInitialPopulation.toFixed(2));
    setShowSolution(true); // Set showSolution to true when the button is clicked

  };

  return (
    <div className='flex flex-col justify-center items-center pt-20 gap-16 text-lg text-red-400 font-bold'>
      <div className='flex flex-col gap-10 lg:flex lg:flex-row'>
      
      <label className='flex gap-5'>
        @t =
        <input
         className='text-center'
          type="text"
          value={time1}
          onChange={handleTime1Change}
          placeholder=""
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>

      <label className='flex gap-5 '>
        P =
        <input
          className='text-center'
          type="text"
          value={populationAtTime1}
          onChange={handlePopulationAtTime1Change}
          placeholder=""
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      </div>
      <div className='flex flex-col gap-10 lg:flex lg:flex-row'>
     
      <label className='flex gap-5'>
        @t =
        <input
          type="text"
          className='text-center'
          value={time2}
          onChange={handleTime2Change}
          placeholder=""
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal' }} // Apply default border style

        />
      </label>

      <label className='flex gap-5'>
        P =
        <input
          type="text"
          className='text-center'
          value={populationAtTime2}
          onChange={handlePopulationAtTime2Change}
          placeholder=""
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      </div>
      <button className='bg-red-600 px-5 py-1 flex justify-center items-center text-white font-semibold rounded-md text-xl'  onClick={calculateInitialPopulation}>Calculate Initial Value</button>
      <div className='rounded-xl bg-red-600 text-white min-w-[350px] md:min-w-[600px] lg:min-w-[600px] max-w-full text-center py-5 mb-10 text-xl font-bold flex flex-col justify-center gap-4 '> 
      <div className={`solution ${showSolution ? 'visible' : 'hidden'}`}> 
        <div className='flex flex-col justify-center gap-10 pb-10 pt-10 sm:text-lg'>
           <div className='flex gap-10  justify-center'>
                     <p>Given: </p>
                     <p> {`@t = ${time1}, P = ${populationAtTime1}`} <br/>
                     {`@t = ${time2}, P = ${populationAtTime2}`}
                     </p>
               </div>
            <div className='flex gap-10  justify-center'>
                <p>Req'd: </p>
                <p>{`@t = 0, P = ?`}
                </p>
              </div>  
           <div className='flex flex-col gap-2  justify-center'>
                <p className='text-left ml-28'>Sol'n: </p>
                 <p>{`P/P = P0e^k(t)/P0e^k(t), k = ? `}<br/>
                    {`P0 = P/e^t(k), Po = ?`}
                 </p>
              </div>  
          </div>
          <p>k = {k}</p>
      </div>
      {initialPopulation !== null && (
        
        <p>Initial Value: {initialPopulation}</p>
      )}
    </div>
    </div>
  );
};

export default Ginitial;
