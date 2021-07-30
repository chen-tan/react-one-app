import React from 'react'
import reactDom from 'react-dom'

export default class classToggle extends React.Component {
  constructor(){
    super();
    this.state = {
      isToggle: true
    }
  }
  handleClick(){
    this.setState({ isToggle: !this.state.isToggle })
  }
  render(){
    return (
      <button onClick={()=>this.handleClick()}>{this.state.isToggle ? 'ON' : 'OFF'}</button>
    )
  }
}