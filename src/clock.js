import React from 'react'
import reactDom from 'react-dom'

export default class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }
  componentDidMount(){
    this.timer = setInterval(() => this.tick() ,this.props.gap);
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    this.timer = null;
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}