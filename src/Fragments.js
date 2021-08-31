import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <Column />
        </tr>
      </table>
    )
  }
}

class Column extends Component {
  render(){
    return (
      <>
        <td>Hello</td>
        <td>World</td>
      </>
    )
  }
}
