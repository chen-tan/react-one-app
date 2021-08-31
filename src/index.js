import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import ClickOutside from './clickOutside';
import Context from './context'
import ErrorBoundaries from './errorBoundaries';
import Fragments from './Fragments'
import Parent from './portals'
import Ref from './ref'
import RenderProps from './RenderProps'
import NameForm from './nonControl';

class App extends Component {
  render() {
    return (
      <div>
        hello world!
      </div>
    )
  }
}

ReactDOM.render(<NameForm />, document.getElementById('root'));
