import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

class SceneButton extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    setupTitleMap: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {
      props: {
        theme,
        setupTitleMap
      }
    } = this
    const illus = document.querySelector(`.theme-${theme.name}`)
    illus.addEventListener('mouseover', () => {
      setTimeout(() => {
        setupTitleMap(theme.title)
      }, 300)
    })
    illus.addEventListener('mouseout', () => {
      setTimeout(() => {
        setupTitleMap('')
      }, 300)
    })
  }

  render() {
    const { theme } = this.props
    return (
      <NavLink
        className={"illus-map theme-" + (theme.name)}
        // style={{backgroundColor: theme.color}}
        to={{
          pathname: theme.url,
          state: {
            theme: theme
          }
        }}
      >
        <img className="illus-map-img" src={'/img/' + theme.illusName} alt="" />
      </NavLink>
    );
  }
}

export default SceneButton;