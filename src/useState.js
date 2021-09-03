import React, { Component } from 'react'

export class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    document.title = `You clicked ${this.state.count} times`
  }
  componentDidUpdate(){
    document.title = `You clicked ${this.state.count} times`
  }
  handleClick() {
    this.setState(prev => ({
      count: prev.count + 1
    }))
  }
  
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          click
        </button>
      </div>
    )
  }
}
