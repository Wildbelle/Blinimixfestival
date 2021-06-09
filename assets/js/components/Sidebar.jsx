import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import logo from '../../img/LogoBlini.svg'

class Sidebar extends Component {
    render(){
        return(
        <React.Fragment>
            <div className="sidebar">
                <div className="social-share">
                    <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faFacebook}/>
                    </button>
                    <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faTwitter}/>
                    </button>
                    <button className="btn btn-icon">
                        <FontAwesomeIcon icon={faWhatsapp}/>
                    </button>
                </div>
                <div className="social-network">
                    <button className="btn btn-icon">
                      <img className="icon" src={logo} alt="blini"/>
                    </button>
                </div>
            </div>
        </React.Fragment>
        );        
    }
}

export default Sidebar;