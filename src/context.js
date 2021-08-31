import React, { Component } from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#00ff00',
  },
  dark: {
    foreground: '#ff0000',
    background: '#ff0000',
  },
};

const ThemeContext = React.createContext(themes.light);

class ThemeButton extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <button {...this.props} style={{backgroundColor: this.context.background}} />
    )
  }
}


class ToolBar extends Component {
  render() {
    return (
      <div>
        <ThemeButton onClick={this.props.changeTheme}>
          Change Theme
        </ThemeButton>
      </div>
    )
  }
}

export default class Container extends Component {
  state = {
    theme: themes.light
  }
  handleChangeTheme = () => {
    this.setState(prev => ({
      theme: prev.theme === themes.light ? themes.dark : themes.light
    }))
  }
  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar changeTheme={this.handleChangeTheme} />
        </ThemeContext.Provider>
        <div>
          <ThemeButton />
        </div>
      </div>
    )
  }
}



