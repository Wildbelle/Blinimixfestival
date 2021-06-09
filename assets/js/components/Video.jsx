import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

export default class Video extends Component {
  static contextType = ThemeContext

  render() {
    const { videoName } = this.context.theme
    return (
      <React.Fragment>
        <div className="container-video">
          <video controls className="canvas-video">
            <source src={"/videos/" + videoName} type={"video/" + (videoName.split('.').pop())} />
            <p>Votre navigateur ne prends pas en charge les vidéos HTML5.
              <a href={"videos/" + videoName}>Télécharger la vidéo</a>
            </p>
          </video>
        </div>
      </React.Fragment>
    );
  }
}