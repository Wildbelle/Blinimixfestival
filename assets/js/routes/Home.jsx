import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

class Home extends Component {
  static contextType = ThemeContext

  componentDidMount() {
    // setTimeout(() => {
    // }, 2000)
    this.context.changeTheme('aqua')
  }
  render() {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default Home;