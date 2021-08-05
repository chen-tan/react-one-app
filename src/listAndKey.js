import React from 'react'



export class List extends React.Component {
  render(){
    const arr = [1,2,3,4,5];
    const listItems = arr.map(item => (<li key={item.toString()}>{item}</li>))
    return (
      <ul>{listItems}</ul>
    )
  }
}

export function Blog(){
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  const sideBar = (
    <ul className='side-bar'>
      {posts.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
  const content = posts.map(item => (
    <div key={item.id} className='content'>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </div>
  ))
  return (
    <div>
      {sideBar}
      <br/>
      {content}
    </div>
  )
}