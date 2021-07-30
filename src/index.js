import React from 'react'
import ReactDOM from 'react-dom'

import Clock from './clock'
import Toggle from './toggle'
import IfRender from './ifRender'

function App(){
  return (
    <div>
      <Clock gap={1000} />
      <Clock gap={2000} />
      <Clock gap={3000} />
    </div>
  )
}

ReactDOM.render(<IfRender isLogin={false} />, document.getElementById('root'))