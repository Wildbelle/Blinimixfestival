import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <React.Fragment>
       <div className="nav-1">
         <div className="logo-2 border">Logo</div>
         <div className="menu border">---</div>
       </div>
       <div className="nav-2">
         <div className="nav-item-page border card-link left">
           <div className="icon"></div>
           <div className="title">
             <h5>La</h5>
             <h5>str'eat</h5>
             <h5>food</h5>
           </div>
         </div>
         <div className="nav-item-page border card-link">
           <div className="icon"></div>
           <div className="title">
             <h5>Le</h5>
             <h5>blini</h5>
             <h5>game</h5>
           </div>
         </div>
       </div>
     </React.Fragment>
    );
  }
}

export default Navigation;