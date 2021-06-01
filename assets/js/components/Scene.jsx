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
       <div className="container">
       <h1 className="title-scene">{theme.title}</h1>
       </div>
     </React.Fragment>
    );
  }
}

export default Scene;