import React from 'react'
import ReactDom from 'react-dom'

function Warning(props){
  if(!props.warn) {
    return null;
  }
  return (
    <h1>Warning!!!</h1>
  )
}

export default class IfRender extends React.Component {
  constructor(){
    super();
    this.state = {
      showWarning: true
    }
  }
  handleClick(){
    this.setState({
      showWarning: !this.state.showWarning
    })
  }
  render(){
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <Warning warn={this.state.showWarning} />
      </div>
    )
  }
}