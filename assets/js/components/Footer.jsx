import React, { Component } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       visible: false
    }
  }
  
  updateVisible = () => {
    this.setState({visible: !this.state.visible})
  }
    
  render() {
    return (
      <React.Fragment>
        <div className="footer">
            <p className="sm">Copyright © 2021 | Blini | <span className="sm" onClick={() => this.updateVisible()}>Mentions légales</span></p>
            
            <button className="cookies btn btn-icon">
                <FontAwesomeIcon className="icon" icon={faCookieBite}/>
            </button>
        </div>
        {this.state.visible && 
          <div className="modal-cgv">
            <button className="btn btn-close" onClick={() => this.updateVisible()}><FontAwesomeIcon icon={faTimes}/></button>
            <div>
                <p>Le site​ cest-frais-by-fever-tree.fr est édité par la société G&R, société par actions simplifiée, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 788 810 992, dont le siège social est sis 7, boulevard Flandrin, 75116 Paris.</p>
                <p>N°SIREN : 788 810 992</p>
                <p>N° TVA : FR36788810992</p>
                <p>Email : <a href="mailto:contact@gustave-et-rosalie.com">contact@gustave-et-rosalie.com</a></p>
                <p>Pays : France</p>
                <p>Roubaix Site Web : <a href="http://www.ovh.com/" target="_blank" rel="noopener noreferrer">http://www.ovh.com/</a> Téléphone : <a href="tel:+33972101007">09 72 10 10 07</a></p>  
                <div id="cookiefirst-policy-page"></div> <div>Cette déclaration de cookie a été créée et mise à jour par <a href="https://cookiefirst.com">CookieFirst.com</a>.</div>
            </div>
            <div>
            </div>
          </div>
        }
      </React.Fragment>
        
    )
  }
}

