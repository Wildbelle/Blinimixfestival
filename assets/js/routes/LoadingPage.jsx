import React, { Component } from 'react';

import logo from '../../img/LogoBliniMix.png'

class LoadingPage extends Component {

  componentDidMount() {
      // setTimeout(() => {
      //   this.props.history.push('/map')
      // }, 3000)
  }

  render() {
    return (
      <div className="loader">
        <div className="block-loading">
          <img className="loading-logo" src={logo} alt="logo"/>
          <p>Le Blini Mix Festival, c’est le rendez-vous musical de l’été sur le web. Un festival digital inédit au fil de 3 concerts exceptionnels aux cotés de <strong>VSO</strong>, <strong>Mozambo</strong> et <strong>French Fuse</strong> !</p>
        </div>
      </div>
    );
  }
}

export default LoadingPage;