import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { themes } from '../theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD6, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

import logo from '../../img/LogoBliniMix.png'

class Navigation extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      showLinks: false,
      mobile: false
    }
  }

  componentDidMount() {
    const { mobile } = this.state
    
    window.innerWidth < 770 && this.setState({mobile:true})
    
    window.addEventListener('resize', () => {
      if(mobile && window.innerWidth > 770) {
        this.setState({mobile: false})
      } else if (!mobile && window.innerWidth < 770) {
        this.setState({mobile: true})
      }
    })
  }

  setNav = () => {
    const nav = document.querySelector('.canvas-nav-burger')
    const burger = document.querySelector('.burger-box')
    burger.classList.toggle('active')

    if(this.state.showLinks) {
      this.setState({showLinks: false})
    } else {
      this.setState({showLinks: true})
    }
  }
  
  render() {
    const { pink, blue } = themes
    const { navVisible } = this.props
    
    return (
      <React.Fragment>
        <div className="nav-1">
          <NavLink exact to="/map"><img className="navbrand" src={logo} alt="logo"/></NavLink>
          {!this.props.location.pathname.includes('map')
            &&  <div className="menu border">
                  <div className="burger-box" onClick={() => this.setNav()}>
                    <div className="burger-bar"></div>
                  </div>
                </div>
          }
        </div>
        <div className={"canvas-nav-burger " + (this.state.showLinks ? "open " : " ") + (this.state.mobile ? "": "desktop")}>
          <div className="navburger">
            {Object.keys(themes).map((value, index) =>{
              const theme = Object.values(themes)[index]
              if(index > 0) {
                return (
                  <NavLink
                    key={index}
                    onClick={() => {
                      const burger = document.querySelector('.burger-box')
                      burger.classList.toggle('active')
                      this.setState({showLinks: false})
                    }}
                    className="btn"
                    exact to={{
                      pathname: theme.url,
                      state: {
                        theme: theme,
                        removeListener: true
                      }
                    }}
                  > {theme.title} </NavLink>
                )
              }
            })}
          </div>
          {this.state.mobile &&
            <div className="social-nav">
              <div className="social-share">
                    <button className="btn btn-icon fb-share-button" data-href="https://blinimixfestival.fr">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblinimixfestival.fr%2F&amp;src=sdkpreparse">
                        <FontAwesomeIcon className="icon" icon={faFacebook}/>
                        </a>
                    </button>
                    <button className="btn btn-icon twitter-share-button">
                        <a target="_blank" href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-url="https://blinimixfestival.fr" data-hashtags="blinimixfestival" data-related="" data-show-count="false">
                        <FontAwesomeIcon className="icon" icon={faTwitter}/>
                        </a>
                    </button>
                </div>
            </div>
          }
        </div>
      

        {navVisible &&
          <div className="nav-2">
            <NavLink 
              className="nav-item-page border card-link left"
              to={{
              pathname: pink.url,
              state: {
                theme: pink
              }
              }} 
            >
              <div className="icon">
                <FontAwesomeIcon icon={faUtensils}/>
              </div>
              <div className="title">
                <h6>str'eat</h6>
                <h6>food</h6>
              </div>
            </NavLink>
            <NavLink 
                className="nav-item-page border card-link"
                to={{
                pathname: blue.url,
                state: {
                  theme: blue
                }
                }} 
            >
              <div className="icon">
                <FontAwesomeIcon icon={faDiceD6}/>
              </div>
              <div className="title">
                <h6>jeu</h6>
                <h6>concours</h6>
              </div>
            </NavLink>
          </div>
        }
     </React.Fragment>
    );
  }
}

export default Navigation;