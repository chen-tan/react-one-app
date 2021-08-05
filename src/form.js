import React from 'react'

export class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {value: ''};
  handleChange(e){
    this.setState({value: e.target.value})
  }
  handleSubmit(e) {
    alert(`表单提交了，值为${this.state.value}`);
    e.preventDefault();
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：<input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="确定" />
      </form>
    )
  }
}

export class Reservation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    const name = e.target.name;
    const value = e.target.name === 'isGoing' ? e.target.checked : e.target.value;
    this.setState({
      [name]: value
    })
  }
  render(){
    return (
      <label>
        参加：<input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleChange} />
        来宾人数：<input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleChange} />
      </label>
    )
  }
}