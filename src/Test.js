import React, {useState, useEffect} from 'react'

export function Test(){
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击了{count}次</p>
      <button onClick={() => {setCount(count+1)}}>
        按钮
      </button>
    </div>
  )
}

export function Test2(){
  const [ count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You click ${count} times`
  })
  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => {setCount(count + 1)}}>button</button>
    </div>
  )
}