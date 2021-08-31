import React, { Component } from 'react'

export default class ErrorBoundaries extends Component {
  constructor(props){
    super(props);
    this.state = { hasError: false }
  }
  static getDerivedStateFormError(){
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo){
    // logErrorToMyService(error, errorInfo)
  }

  render() {
    if(this.state.hasError) {
      return (<h1>Someing is error!</h1>)
    }
    return (
      <div>

      </div>
    )
  }
}
