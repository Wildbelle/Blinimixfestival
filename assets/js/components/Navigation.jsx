import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { themes } from '../theme-context';

class Navigation extends Component {
  
  render() {
    const { pink, blue } = themes
    const { navVisible } = this.props
    
    return (
      <React.Fragment>
      <div className="container">
        <div className="nav-1">
          <div className="logo-2 border">Logo</div>
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
              <div className="icon"></div>
              <div className="title">
                <h6>La</h6>
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
              <div className="icon"></div>
              <div className="title">
                <h6>Le</h6>
                <h6>blini</h6>
                <h6>game</h6>
              </div>
            </NavLink>
          </div>
        }
       </div>
     </React.Fragment>
    );
  }
}

export default Navigation;