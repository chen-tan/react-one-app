import { throwStatement } from '@babel/types';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root');
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  componentDidMount(){
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render(){
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState(prev => ({
      clicks: prev.clicks + 1
    }))
  }
  render(){
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <Modal>
          <Child />
        </Modal>
      </div>
    )
  }
}

function Child() {
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default Parent;