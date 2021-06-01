import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

class Scene extends Component {
  static contextType = ThemeContext

  componentDidMount() {
    this.context.changeTheme(this.props.location.state.theme.name)
  }

  render() {
    return (
      <div>
        Scene
      </div>
    );
  }
}

export default Scene;