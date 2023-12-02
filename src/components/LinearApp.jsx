import React, { useState } from 'react';

const NewtonLawCoolingHeating = () => {
  const [initialTemperature, setInitialTemperature] = useState('');
  const [ambientTemperature, setAmbientTemperature] = useState('');
  const [targetTemperature, setTargetTemperature] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const handleInitialTemperatureChange = (event) => {
    setInitialTemperature(event.target.value);
  };

  const handleAmbientTemperatureChange = (event) => {
    setAmbientTemperature(event.target.value);
  };

  const handleTargetTemperatureChange = (event) => {
    setTargetTemperature(event.target.value);
  };

  const calculateTemperatureAndTime = () => {
    // Implement the logic to calculate temperature and time based on Newton's Law of Cooling/Heating
    // Update the 'result' state accordingly

    // Example:
    const T0 = parseFloat(initialTemperature);
    const Tm = parseFloat(ambientTemperature);
    const T = parseFloat(targetTemperature);

    if (isNaN(T0) || isNaN(Tm) || isNaN(T)) {
      setResult('Please enter valid temperature values.');
      return;
    }

    const k = -0.287682072; // Example value, replace it with the calculated value

    // Calculate time
    const t = Math.log((Tm - T0) / (Tm - T)) / k;

    // Calculate temperature at the given time
    const temperature = Tm + (T0 - Tm) * Math.exp(k * t);

    setResult(`Temperature after ${t.toFixed(2)} minutes: ${temperature.toFixed(2)}°F`);
    setTime(t.toFixed(2));
  };

  return (
    <div>
      <h1>Newton's Law of Cooling/Heating</h1>

      <label>
        Initial Temperature (°F):
        <input type="text" value={initialTemperature} onChange={handleInitialTemperatureChange} />
      </label>

      <label>
        Ambient Temperature (°F):
        <input type="text" value={ambientTemperature} onChange={handleAmbientTemperatureChange} />
      </label>

      <label>
        Target Temperature (°F):
        <input type="text" value={targetTemperature} onChange={handleTargetTemperatureChange} />
      </label>

      <button onClick={calculateTemperatureAndTime}>Calculate</button>

      {result && <div>{result}</div>}
      {time && <div>Time: {time} minutes</div>}
    </div>
  );
};

export default NewtonLawCoolingHeating;
