import React, { Component } from 'react';
import PropTypes from 'prop-types'

class SceneButton extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
  }

  componentDidMount() {
    console.log(this.props.color);
  }

  render() {
    const { color } = this.props
    return (
      <div
        className="illus-map"
        style={{backgroundColor: color}}
      >
      </div>
    );
  }
}

export default SceneButton;