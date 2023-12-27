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
    const isNonlinear = equationLower.includes('y^3') && equationLower.includes(')^3');
    const dependentVariable = equationLower.includes('y') ? 'y' : 'Unknown';
    const independentVariable = equationLower.includes('x') ? 'x' : 'Unknown';

    const isPDE = equationLower.includes('dy/d') && !equationLower.includes('dy/dx');
    const isODE = equationLower.includes('dy/dx') || equationLower.includes('y"') || equationLower.includes("y'") || equationLower.includes('dy') || equationLower.includes('dx') ;
    

    // const degreeMatch = equationLower.match(/y\^\d+/);
    const exponentMatches = equationLower.match(/y\^(\d+)/g);
    const degree = exponentMatches ? Math.max(...exponentMatches.map(match => parseInt(match.match(/\d+/)[0]))) : '1';


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
    <div id="class" className='flex justify-center items-center flex-col mb-10 px-11 pt-10 '>
      <h2 className='text-center text-5xl font-bold py-20 text-red-600'>Differential Equation Classifier</h2>
      <div className='flex flex-col gap-5 justify-center items-center lg:flex lg:flex-row lg:items-center lg:mb-10'>
       
        <textarea
          placeholder="Enter a differential equation (e.g., dy/dx = f(x))"
          value={equation}
          onChange={handleInputChange}
          className="border-2 border-black min-w-[320px] md:min-w-[500px] lg:min-w-[600px] max-w-full h-10 resize-none text-lg pt-1 pl-2 rounded-lg"
        />
       
        <button className='justify-center bg-red-600 px-5 py-2 mb-4 lg:mb-0 rounded-lg text-white font-semi' onClick={classifyEquation}>Classify</button>
      </div>
      <div>
        <p>Differential Equation:</p>
        <p className='text-center'>{eq}</p>
      </div>
      <div className='mt-10 bg-red-600 rounded-xl min-w-[250px] md:min-w-[600px] lg:min-w-[900px] max-w-full p-8 text-white'>
        <p className='text-center pb-10 font-bold text-2xl'>Classification:</p>
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
