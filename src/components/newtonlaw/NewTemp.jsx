import React, { useState } from 'react';

const CoolingHeatingCalculator = () => {
  const [initialTemperature, setInitialTemperature] = useState('');
  const [ambientTemperature, setAmbientTemperature] = useState('');
  const [temperatureAtOneMinute, setTemperatureAtOneMinute] = useState('');
  const [timeAtOneMinute, setTimeAtOneMinute] = useState('');
  const [timeAtFiveMinutes, setTimeAtFiveMinutes] = useState('');
  const [result, setResult] = useState(null);

  const calculateTemperature = () => {
    const T0 = parseFloat(initialTemperature);
    const Tambient = parseFloat(ambientTemperature);
    const T1 = parseFloat(temperatureAtOneMinute);
    const t1 = parseFloat(timeAtOneMinute);
    const t2 = parseFloat(timeAtFiveMinutes);

    // Calculate k
    const k = Math.log((T1 - Tambient) / (T0 - Tambient)) / t1;

    // Calculate T(5)
    const T5 = Tambient + (T0 - Tambient) * Math.exp(k * t2);

    setResult({
      k: k.toFixed(10),
      T5: T5.toFixed(2),
    });
  };

  return (
    <div className='flex flex-col justify-center items-center pt-20 gap-16 text-lg text-red-400 font-bold'>
 <div className='flex flex-col gap-10 lg:flex lg:flex-row'>
      <label className='flex gap-5 '>
      T=
        <input
          type="number"
          value={initialTemperature}
          onChange={(e) => setInitialTemperature(e.target.value)}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      
      <label className='flex gap-5 '>
                Tm =
        <input
          type="number"
          value={ambientTemperature}
          onChange={(e) => setAmbientTemperature(e.target.value)}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      </div>
      <div className='flex flex-col gap-10 lg:flex lg:flex-row'>
      <label className='flex gap-5 '>
                @t1 = 
        <input
          type="number"
          value={timeAtOneMinute}
          onChange={(e) => setTimeAtOneMinute(e.target.value)}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      <label className='flex gap-5 '>
                T =
        <input
          type="number"
          value={temperatureAtOneMinute}
          onChange={(e) => setTemperatureAtOneMinute(e.target.value)}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      </div>
      <label className='flex gap-5 '>
        @t2 =  
        <input
          type="number"
          value={timeAtFiveMinutes}
          onChange={(e) => setTimeAtFiveMinutes(e.target.value)}
          style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

        />
      </label>
      
      <button className='bg-red-600 px-5 py-1 flex justify-center items-center text-white font-semibold rounded-md text-xl' onClick={calculateTemperature}>Calculate</button>
      <div className='bg-red-600 text-white min-w-[350px] md:min-w-[600px] lg:min-w-[600px] max-w-full text-center py-5 mb-10 text-xl font-bold flex flex-col justify-center gap-4 '> 

      {result && (
        <div>
          <p>k: {result.k}</p>
          <p>T =  {result.T5} °F</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default CoolingHeatingCalculator;
