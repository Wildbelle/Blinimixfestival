import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

class SceneButton extends Component {
  static propTypes = {
    theme: PropTypes.object.isRequired,
    setupTitleMap: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  
    this.state = {
      visible: false
    }
  }
  
  componentDidMount() {
    const {
      props: {
        theme,
        setupTitleMap
      }
    } = this
    const illus = document.querySelector(`.theme-${theme.name}`)
    const element = document.querySelector('.bubble-bkg')

    illus.addEventListener('mouseover', () => {
      const canvas = document.querySelector('.global')
      canvas.style.filter = "grayscale(60%) "
      element.style.transform = "translate(-50%, -50%) scale(100)"
      element.style.background = theme.color
      
      this.setState({visible: true})
      setTimeout(() => {
        setupTitleMap(theme.title)
      }, 300)
    })
    illus.addEventListener('mouseout', () => {
      const canvas = document.querySelector('.global')
      canvas.style.filter = "grayscale(0)"
      element.style.transform = "translate(-50%, -50%) scale(1)"

      this.setState({visible: false})
      setTimeout(() => {
        setupTitleMap('')
      }, 300)
    })
  }

  render() {
    const { theme, desktop } = this.props
    return (
      <NavLink
        className={"illus-map theme-" + (theme.name)}
        style={desktop ? theme.styleDesktop : {}}
        to={{
          pathname: theme.url,
          state: {
            theme: theme
          }
        }}
      >
        {this.props.desktop
          ? null
          : <h5 className="title-illus-map">{theme.title}</h5>
        }
      <img
        className="illus-map-img"
        src={'/img/' + (this.props.desktop ? theme.illusNameDesktop : theme.illusName)}
        style={{
          opacity: this.props.desktop
                    ? this.state.visible ? 1 : 0
                    : 1
        }}
        alt=""
        />
      </NavLink>
    );
  }
}

export default SceneButton;