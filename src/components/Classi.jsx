import React, { Component } from 'react';

class Classi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      classification: {
        linearity: 'Unknown',
        degree: 'Unknown',
        dependentVariable: 'Unknown',
        independentVariable: 'Unknown',
        type: 'Unknown',
      },
    };
  }

  classifyEquation = () => {
    const equation = this.state.equation.toLowerCase();

    // Check for keywords to classify the equation
    const isLinear = equation.includes('d') && equation.includes('y');
    const isNonlinear = equation.includes('^3');
    const dependentVariable = equation.includes('y') ? 'y' : 'Unknown';
    const independentVariable = equation.includes('x') ? 'x' : 'Unknown';
   
    const isPDE = equation.includes('d2y/dx2') || equation.includes('d2y/dt2') || equation.includes('partial');
    const isODE = equation.includes('dy/dx') || equation.includes('dy/dt');

    const degreeMatch = equation.match(/y\^\d+/);
    const degree = degreeMatch ? degreeMatch[0].match(/\d+/)[0] : '1';

    this.setState({
      classification: {
        linearity: isLinear ? 'Linear' : (isNonlinear ? 'Nonlinear' : 'Unknown'),
        degree,
        dependentVariable,
        independentVariable,
        type: isPDE ? 'Partial Differential Equation' : (isODE ? 'Ordinary Differential Equation' : 'Unknown'),
      },
    });
  };

  handleInputChange = (event) => {
    this.setState({ equation: event.target.value });
  };

  render() {
    const { classification } = this.state;

    return (
      <div className='flex justify-center items-center flex-col mb-10'>
        <h2 className='text-center text-5xl font-bold py-20 text-red-600'>Differential Equation Classifier</h2>
      <div className='flex gap-5 pb-10'>
      <textarea
            placeholder="Enter a differential equation (e.g., dy/dx = f(x))"
            value={this.state.equation}
            onChange={this.handleInputChange}
            className="border-2 border-black w-[500px] h-10 resize-none text-lg pt-1 pl-2 rounded-lg"
          />
        <button className='bg-red-600 px-5 rounded-lg text-white font-semi' onClick={this.classifyEquation}>Classify</button>
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
  }
}

export default Classi;
