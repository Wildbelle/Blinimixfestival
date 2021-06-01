import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="container">
       <div className="nav-1">
         <div className="logo-2 border">Logo</div>
         <div className="menu border">---</div>
       </div>
       <div className="nav-2">
         <div className="nav-item-page border card-link left">
           <div className="icon"></div>
           <div className="title">
             <h6>La</h6>
             <h6>str'eat</h6>
             <h6>food</h6>
           </div>
         </div>
         <div className="nav-item-page border card-link">
           <div className="icon"></div>
           <div className="title">
             <h6>Le</h6>
             <h6>blini</h6>
             <h6>game</h6>
           </div>
         </div>
       </div>
       </div>
     </React.Fragment>
    );
  }
}

export default Navigation;