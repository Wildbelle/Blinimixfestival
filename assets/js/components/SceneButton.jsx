import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

class SceneButton extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
  }

  render() {
    const {theme } = this.props
    return (
      <NavLink
        className="illus-map"
        style={{backgroundColor: theme.color}}
        to={{
          pathname: theme.url,
          state: {
            theme: theme
          }
        }}
      >
      </NavLink>
    );
  }
}

export default SceneButton;