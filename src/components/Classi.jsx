import React, { Component } from 'react';

class Classi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      classification: {
        linearity: 'Unknown',
        order: 'Unknown',
        degree: 'Unknown',
        dependentVariable: 'Unknown',
        independentVariable: 'Unknown',
      },
    };
  }

  classifyEquation = () => {
    const equation = this.state.equation.toLowerCase();

    // Check for keywords to classify the equation
    const isLinear = equation.includes('d') && equation.includes('y') && !equation.includes('y^');
    const isNonlinear = equation.includes('y') && equation.includes('x');
    const order = equation.split('d').length - 1;
    const dependentVariable = equation.includes('y') ? 'y' : 'Unknown';
    const independentVariable = equation.includes('x') ? 'x' : 'Unknown';

    const degreeMatch = equation.match(/y\^\d+/);
    const degree = degreeMatch ? degreeMatch[0].match(/\d+/)[0] : 'Unknown';

    this.setState({
      classification: {
        linearity: isLinear ? 'Linear' : (isNonlinear ? 'Nonlinear' : 'Unknown'),
        order: order > 0 ? order : 'Unknown',
        degree,
        dependentVariable,
        independentVariable,
      },
    });
  };

  handleInputChange = (event) => {
    this.setState({ equation: event.target.value });
  };

  render() {
    const { classification } = this.state;

    return (
      <div className='flex justify-center items-center flex-col'>
        <h2 className='text-center text-5xl'>Differential Equation Classifier</h2>
        <textarea
          placeholder="Enter a differential equation (e.g., dy/dx = f(x))"
          value={this.state.equation}
          onChange={this.handleInputChange}
        />
        <button onClick={this.classifyEquation}>Classify</button>
        <div>
          <strong>Classification:</strong>
          <ul>
            <li>Linearity: {classification.linearity}</li>
            <li>Order: {classification.order}</li>
            <li>Degree: {classification.degree}</li>
            <li>Dependent Variable: {classification.dependentVariable}</li>
            <li>Independent Variable: {classification.independentVariable}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Classi;
