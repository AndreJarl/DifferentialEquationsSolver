import React, { useState } from 'react';

const CoolingHeatingTimeCalculator = () => {
  const [initialTemperature, setInitialTemperature] = useState('');
  const [ambientTemperature, setAmbientTemperature] = useState('');
  const [temperatureAtOneMinute, setTemperatureAtOneMinute] = useState('');
  const [timeAtOneMinute, setTimeAtOneMinute] = useState('');
  const [temperatureAtUnknownTime, setTemperatureAtUnknownTime] = useState('');
  const [result, setResult] = useState(null);

  const calculateTimeAndConstant = () => {
    const T0 = parseFloat(initialTemperature);
    const Tambient = parseFloat(ambientTemperature);
    const T1 = parseFloat(temperatureAtOneMinute);
    const t1 = parseFloat(timeAtOneMinute);
    const T_unknown = parseFloat(temperatureAtUnknownTime);

    // Calculate cooling/heating constant (k)
    const k = Math.log((T1 - Tambient) / (T0 - Tambient)) / t1;

    // Calculate time for T = 90 using the inverse of the formula
    const t_unknown = Math.log((T_unknown - Tambient) / (T0 - Tambient)) / k;

    setResult({
      k: k.toFixed(4),
      timeAtUnknown: t_unknown.toFixed(2),
    });
  };

  return (
    <div className='flex flex-col justify-center items-center pt-20 gap-16 text-lg text-red-400 font-bold'>
      <div className='flex flex-col gap-10 lg:flex lg:flex-row'>
      <label className='flex gap-5 '>
          T = 
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
      <div className="flex flex-col lg:flex-row gap-4">

      <label className='flex gap-5 '>
          @t =
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
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2">
          T = 
          <input
            type="number"
            value={temperatureAtUnknownTime}
            onChange={(e) => setTemperatureAtUnknownTime(e.target.value)}
            style={{ border: '1px solid black', color: 'black', textAlign: 'center', fontWeight: 'normal'}} // Apply default border style

          />
        </label>
      </div>
      <button
        onClick={calculateTimeAndConstant}
        className='bg-red-600 px-5 py-1 flex justify-center items-center text-white font-semibold rounded-md text-xl'
      >
        Calculate
      </button>
      {result && (
       <div className='bg-red-600 text-white min-w-[350px] md:min-w-[600px] lg:min-w-[600px] max-w-full text-center py-5 mb-10 text-xl font-bold flex flex-col justify-center gap-4 '> 
          <p>Constant (k): {result.k}</p>
          <p>Time: {result.timeAtUnknown}</p>
        </div>
      )}
    </div>
  );
};

export default CoolingHeatingTimeCalculator;
