import React, { Component } from 'react'

export default class Chosen extends Component {
  componentDidMount(){
    this.$el = $(this.el);
    this.$el.chosen();
    this.handleChange = this.handleChange.bind(this);
    this.$el.on('change', this.handleChange)
  }
  componentWillUnmount(){
    this.$el.chosen('destroy');
    this.$el.off('change', this.handleChange)
  }
  componentDidUpdate(prevProps){
    if(prevProps.children !== this.props.children) {
      this.$el.trigger('chosen:update');
    }
  }
  handleChange(e){
    this.props.onChange(e.target.value)
  }
  render() {
    return (
      <div>
        <select className="choose-select" ref={el => this.el = el}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

function example() {
  return (
    <div>
      <Chosen onChange={value => console.log(value)}>
        <option>上海</option>
        <option>北京</option>
        <option>长沙</option>
      </Chosen>
    </div>
  )
}