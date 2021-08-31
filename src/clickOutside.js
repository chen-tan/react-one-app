import React, { Component } from 'react'

// export default class clickOutside extends Component {
//   state = {
//     isOpen: false
//   }
//   constructor(){
//     super();
//     this.container = React.createRef();
//     this.handleClick = this.handleClick.bind(this);
//     this.handleClickOutside = this.handleClickOutside.bind(this);
//   }
//   componentDidMount(){
//     window.addEventListener('click', this.handleClickOutside);
//   }
//   componentWillUnmount(){
//     window.removeEventListener('click', this.handleClickOutside);
//   }
//   handleClick() {
//     this.setState(currentState => ({
//       isOpen: !currentState.isOpen
//     }));
//   }
//   handleClickOutside(e){
//     if(this.state.isOpen && !this.container.current.contains(e.target)) {
//       this.setState({isOpen: false});
//     }
//   }
//   render() {
//     return (
//       <div ref={this.container}>
//         <button onClick={this.handleClick}>Select an option</button>
//         {this.state.isOpen && (
//           <ul>
//             <li>Option one</li>
//             <li>Option two</li>
//             <li>Option three</li>
//           </ul>
//         )}
//       </div>
//     )
//   }
// }

export default class clickOutside extends Component {
  constructor(){
    super();
    this.state = {
      isOpen: false
    }
    this.timeoutId = null;
    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleClick(){
    this.setState(prev => ({
      isOpen: !prev.isOpen
    }))
  }
  handleFocus(){
    clearTimeout(this.timeoutId);
  }
  handleBlur(){
    this.timeoutId = setTimeout(() => {
      this.setState({
        isOpen: true
      })
    })
  }
  render() {
    return (
      <div onFocus={this.handleFocus} onBlur={this.handleBlur}>
        <button onClick={this.handleClick}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option one</li>
            <li>Option two</li>
            <li>Option three</li>
          </ul>
        )}
      </div>
    )
  }
}
