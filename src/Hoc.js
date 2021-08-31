import React, { Component } from 'react'

function withSubscription(WrapperComp, selectData){
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(dataSource, props)
      }
    }
    componentDidMount(){
      dataSource.addChangeListener(this.handleChange);
    }
    componentWillUnmount(){
      dataSource.removeChangeListener(this.handleChange);
    }
    handleChange(){
      this.setState({
        data: selectData(dataSource, this.props)
      })
    }
    render(){
      return <WrapperComp {...this.props} data={this.state.data} />
    }
  }
}
