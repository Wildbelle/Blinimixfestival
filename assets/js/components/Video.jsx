import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default class Video extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)
  
    this.state = {
       visiblePage: true,
       videoPlay: false
    }
  }

  componentDidMount() {
    const container = document.querySelector('.container-video')
    const video = document.getElementById('canvas-video')
    container.addEventListener('click', () => {
      if(this.state.videoPlay) {
        video.pause()
        this.setState({videoPlay: false})
      } else {
        video.play()
        this.setState({videoPlay: true})
      }
    })

    // document.addEventListener('mousemove')
  }

  fadeIcon() {
    const icon = document.querySelector('.icon-pause')
    if(icon) {
      icon.style.opacity = 1

      setTimeout(() => {
        icon.style.opacity= 0
      }, 3000)
    }
  }
  

  render() {
    const { videoName } = this.context.theme
    return (
      <React.Fragment>
        {this.state.visiblePage
          ? <div className="container-video" onMouseMove={() => this.state.videoPlay && this.fadeIcon()} style={{height: "100%", width: "100%", zIndex: 999999}}>
            {!this.state.videoPlay
              ? <div className="icon-play">
                  <FontAwesomeIcon icon={faPlayCircle} />
                </div>
              : <div className="icon-pause">
                  <FontAwesomeIcon icon={faPauseCircle} />
                </div>
            }
              <video id="canvas-video" className="canvas-video">
                <source src={"/videos/" + videoName} type="video/mp4" />
                <p>Votre navigateur ne prends pas en charge les vidéos HTML5.
                  <a href={"videos/" + videoName}>Télécharger la vidéo</a>
                </p>
              </video>
            </div>
          : null
        }
      </React.Fragment>
    );
  }
}