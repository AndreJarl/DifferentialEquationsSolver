import React, { useState } from 'react';

const GrowthTimeCalculator = () => {
  const [initialValue, setInitialValue] = useState('');
  const [targetValue, setTargetValue] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [result, setResult] = useState(null);

  const handleInitialValueChange = (e) => {
    setInitialValue(e.target.value);
  };

  const handleTargetValueChange = (e) => {
    setTargetValue(e.target.value);
  };

  const handleGrowthRateChange = (e) => {
    setGrowthRate(e.target.value);
  };

  const calculateTime = () => {
    // Validate the inputs
    if (!initialValue || !targetValue || !growthRate || isNaN(parseFloat(initialValue)) || isNaN(parseFloat(targetValue)) || isNaN(parseFloat(growthRate))) {
      alert('Please enter valid values for initial value, target value, and growth rate.');
      return;
    }

    // Convert inputs to numbers
    const parsedInitialValue = parseFloat(initialValue);
    const parsedTargetValue = parseFloat(targetValue);
    const parsedGrowthRate = parseFloat(growthRate);

    // Calculate time (t)
    const timeInYears = -Math.log( parsedInitialValue / parsedTargetValue) / parsedGrowthRate;

    // Convert time to centuries
    const timeInCenturies = timeInYears / 100;

    setResult({ timeInYears, timeInCenturies });
  };

  return (
    <div className='flex flex-col justify-center items-center pt-20 gap-16 text-lg text-red-400 font-bold'>
      
      <label className='flex gap-5 '>
        Initial Value:
        <input
         className='text-center'
          type="text"
          value={initialValue}
          onChange={handleInitialValueChange}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      <label className='flex gap-5 '>
        Target Value:
        <input
          className='text-center'
          type="text"
          value={targetValue}
          onChange={handleTargetValueChange}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      <label className='flex gap-5 '>
        Growth Rate:
        <input
          className='text-center'
          type="text"
          value={growthRate}
          onChange={handleGrowthRateChange}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      <button className='bg-red-600 px-5 py-1 flex justify-center items-center text-white font-semibold rounded-md text-xl' onClick={calculateTime}>Calculate Time</button>
      <div className=' rounded-xl bg-red-600 text-white min-w-[350px] md:min-w-[600px] lg:min-w-[600px] max-w-full text-center py-5 mb-10 text-xl font-bold flex flex-col justify-center gap-4 '> 
      {result && (
        <div>
          <p className='pb-5'>
            {`Sol'n: `} <br/>
            {`P = ce^k(t)`}<br/>
             {`@t = 0, P = ${initialValue}`} <br/>
             {`@t = ?, P =${targetValue}`}<br/>
             {`${targetValue} = ${initialValue}e^${growthRate}(t)`}
          </p>
          <p>Time (t) in years: {result.timeInYears.toFixed(2)}</p>
          <p>Time (t) in centuries: {result.timeInCenturies.toFixed(2)}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default GrowthTimeCalculator;
