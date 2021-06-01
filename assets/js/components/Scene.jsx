import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';
import Navigation from './Navigation';

class Scene extends Component {
  static contextType = ThemeContext

  componentDidMount() {
    this.context.changeTheme(this.props.location.state.theme.name)
  }

  render() {
    const { theme } = this.props.location.state
    return (
      <React.Fragment>
       <Navigation />
       <h1 className="title-scene">{theme.name.replace(' ', '</br>')}</h1>
     </React.Fragment>
    );
  }
}

export default Scene;