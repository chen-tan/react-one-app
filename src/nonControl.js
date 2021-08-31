import React, { Component } from 'react'

export default class NameForm extends Component {
  constructor(props){
    super(props);
    this.ref = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(`The name ${this.ref.current.value} is submit`);
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>
          name: <input type="text" ref={this.ref} />
        </lable>
        <input type="submit" value="submit" />
      </form>
    )
  }
}
