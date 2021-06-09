import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { themes } from '../theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceD6 } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

import logo from '../../img/LogoBliniMix.png'

class Navigation extends Component {
  
  render() {
    const { pink, blue } = themes
    const { navVisible } = this.props
    
    return (
      <React.Fragment>
        <div className="nav-1">
          <img className="navbrand" src={logo} alt="logo"/>
          <div className="menu border">---</div>
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
                <h6>blini</h6>
                <h6>game</h6>
              </div>
            </NavLink>
          </div>
        }
     </React.Fragment>
    );
  }
}

export default Navigation;