import React, { Component } from 'react'

export default class ref extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput(){
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input type="text" value="点我聚焦" onClick={this.focusTextInput} />
      </div>
    )
  }
}
