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
                    <button className="btn btn-icon fb-share-button" data-href="https://blinimixfestival.fr">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fblinimixfestival.fr%2F&amp;src=sdkpreparse">
                        <FontAwesomeIcon className="icon" icon={faFacebook}/>
                        </a>
                    </button>
                    <button className="btn btn-icon">
                        <FontAwesomeIcon className="icon" icon={faTwitter}/>
                    </button>
                    <button className="btn btn-icon">
                        <FontAwesomeIcon className="icon" icon={faWhatsapp}/>
                    </button>
                </div>
                <div className="social-network">
                    <button className="btn btn-icon">
                        <a href="https://www.instagram.com/blini_fr/?hl=fr" target="_blank">
                            <img className="icon" src={logo} alt="blini"/>
                        </a>
                    </button>
                </div>
            </div>
        </React.Fragment>
        );        
    }
}

export default Sidebar;