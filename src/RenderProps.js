import React, { Component } from 'react'
import PropTypes, { elementType } from 'prop-types'

class Mouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    return (
      <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
        <p>鼠标的位置是{`x: ${this.state.x}, y: ${this.state.y}`}</p>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class Cat extends Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <div style={{height: '100px', width: '100px', backgroundColor: '#f00', position: 'absolute', left: mouse.x, top: mouse.y}}>This is a cat</div>
    )
  }
}

export default function MouseTracker() {
  return (
    <div>
      <h3>移动鼠标</h3>
      <React.strictMode>
        <Mouse render={mouse => <Cat mouse={mouse} />} />
      </React.strictMode>
    </div>
  )
}
