import React, { useState } from 'react';

const Classi = () => {
  const [equation, setEquation] = useState('');
  const [classification, setClassification] = useState({
    linearity: 'Unknown',
    degree: 'Unknown',
    dependentVariable: 'Unknown',
    independentVariable: 'Unknown',
    type: 'Unknown',
  });
  const [eq, setEq] = useState(null);

  const classifyEquation = () => {
    const equationLower = equation.toLowerCase();

    // Check for keywords to classify the equation
    const isLinear = equationLower.includes('d') && equationLower.includes('y') && equationLower.includes('x');
    const isNonlinear = equationLower.includes('^3') && equationLower.includes('^3');
    const dependentVariable = equationLower.includes('y') ? 'y' : 'Unknown';
    const independentVariable = equationLower.includes('x') ? 'x' : 'Unknown';

    const isPDE = equationLower.includes('d2y/dx2') || equationLower.includes('d2y/dt2') || equationLower.includes('partial');
    const isODE = equationLower.includes('dy/dx') || equationLower.includes('dy/dt');

    const degreeMatch = equationLower.match(/y\^\d+/);
    const degree = degreeMatch ? degreeMatch[0].match(/\d+/)[0] : '1';

    setClassification({
      linearity: isLinear ? 'Linear' : isNonlinear ? 'Nonlinear' : 'Linear',
      degree,
      dependentVariable,
      independentVariable,
      type: isPDE ? 'Partial Differential Equation' : isODE ? 'Ordinary Differential Equation' : 'Partial Differential Equation',
    });

    setEquation('');
  };

  const handleInputChange = (event) => {
    const text = event.target.value;
    setEquation(text);
    setEq(text);
  };

  return (
    <div className='flex justify-center items-center flex-col mb-10'>
      <h2 className='text-center text-5xl font-bold py-20 text-red-600'>Differential Equation Classifier</h2>
      <div className='flex gap-5 pb-10'>
        <textarea
          placeholder="Enter a differential equation (e.g., dy/dx = f(x))"
          value={equation}
          onChange={handleInputChange}
          className="border-2 border-black w-[500px] h-10 resize-none text-lg pt-1 pl-2 rounded-lg"
        />
        <button className='bg-red-600 px-5 rounded-lg text-white font-semi' onClick={classifyEquation}>Classify</button>
      </div>
      <div>
        <p>Text in the text area:</p>
        <p>{eq}</p>
      </div>
      <div className='mt-10 bg-red-600 rounded-xl w-[900px] p-8 text-white'>
        <p className='text-center pb-10 font-bold text-4xl'>Classification:</p>
        <ul className='flex gap-5 flex-col'>
          <li><span className='font-bold pr-4'>Dependent Variable:</span>{classification.dependentVariable}</li>
          <li><span className='font-bold pr-4'>Independent Variable:</span> {classification.independentVariable}</li>
          <li><span className='font-bold pr-4'>Degree:</span> {classification.degree}</li>
          <li><span className='font-bold pr-4'>Linearity:</span> {classification.linearity}</li>
          <li><span className='font-bold pr-4'>Type:</span> {classification.type}</li>
        </ul>
      </div>
    </div>
  );
};

export default Classi;
