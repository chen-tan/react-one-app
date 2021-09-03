import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {Test, Test2} from './Test'
import { Example } from './useState'

class App extends Component {
  render() {
    return (
      <div>
        hello world!
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
