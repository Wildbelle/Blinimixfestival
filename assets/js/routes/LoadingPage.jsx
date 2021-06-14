import React, { Component } from 'react';

import logo from '../../img/LogoBliniMix.png'

class LoadingPage extends Component {

  componentDidMount() {
      setTimeout(() => {
        this.props.history.push('/map')
      }, 2000)
  }

  render() {
    return (
      <div className="loader">
        <div className="block-loading">
          <img className="loading-logo" src={logo} alt="logo"/>
          <p>Le Blini Mix Festival, c’est le rendez-vous musical de l’été sur le web. Un festival digital inédit au fil de 3 concerts exceptionnels aux cotés de <a href="https://www.instagram.com/vsoklan/?hl=fr" target="_blank">VSO</a>, <a href="https://www.instagram.com/mozambo/?hl=fr" target="_blank">Mozambo</a> et <a href="https://www.instagram.com/frenchfusemusic/?hl=fr" target="_blank">French Fuse</a> !</p>
        </div>
      </div>
    );
  }
}

export default LoadingPage;