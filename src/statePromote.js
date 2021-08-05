import React, { Component } from 'react'


export function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return (<p>The water would boil.</p>)
  }
  return (<p>The water would not boil.</p>)
}

export class TemperatureInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      temperature: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      temperature: e.target.value
    })
  }
  render(){
    return (
      <fieldset>
        <legend>Enter temperature in {this.props.scale}:</legend>
        <input value={this.props.temperature} onChange={this.props.onChange} />
        <BoilingVerdict celsius={this.state.temperature} />
      </fieldset>
    )
  }
}

export class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      temperature: '1000',
      scale: 'Fahrenheit'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(e){
    this.setState({
      scale: 'Celsius',
      temperature: e.target.value
    })
  }
  handleFahrenheitChange(e){
    this.setState({
      scale: 'Fahrenheit',
      temperature: e.target.value
    })
  }
  render() {
    const { scale, temperature } = this.state;
    const celsius = scale === 'Fahrenheit' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'Celsius' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput scale='Celsius' temperature={celsius} onChange={this.handleCelsiusChange} />
        <TemperatureInput scale='Fahrenheit' temperature={fahrenheit} onChange={this.handleFahrenheitChange} />
      </div>
    )
  }
}

function toCelsius(fahrenheit){
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius){
  return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}