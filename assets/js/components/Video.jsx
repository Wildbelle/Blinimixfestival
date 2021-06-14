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
       videoPlay: false,
       currentPath: ""
    }
  }

  detectEventVideo() {
  }

  componentDidMount() {
    this.setState({currentPath: this.props.location.pathname})
    const container = document.querySelector('.container-video-' + (this.props.location.pathname.split('/').pop()))
    const video = document.getElementById('canvas-video-' + (this.props.location.pathname.split('/').pop()))
    container.addEventListener('click', () => {
      if(this.state.videoPlay) {
        video.pause()
        this.setState({videoPlay: false})
      } else {
        video.play()
        this.setState({videoPlay: true})
      }
    })
  }

  componentDidUpdate() {
    this.detectEventVideo()
    const statePath = this.state.currentPath
    const currentPath = this.props.location.pathname

    if(currentPath !== statePath) {
      this.setState({currentPath: currentPath, visiblePage: false}, () => {
        setTimeout(() => {
          this.setState({visiblePage: true})
        }, 2000)
      })
    }
  }

  fadeIcon() {
    const icon = document.querySelector('.icon-pause')
    if(icon) {
      icon.style.opacity = 1

      setTimeout(() => {
        icon.style.opacity= 0
      }, 2000)
    }
  }
  

  render() {
    const { videoName } = this.context.theme
    return (
      <React.Fragment>
        {this.state.visiblePage
          ? <div className={"container-video-" + (this.props.location.pathname.split('/').pop())} onMouseMove={() => this.state.videoPlay && this.fadeIcon()} style={{height: "100%", width: "100%", zIndex: 999999}}>
            {!this.state.videoPlay
              ? <div className="icon-play">
                  <FontAwesomeIcon icon={faPlayCircle} />
                </div>
              : <div className="icon-pause">
                  <FontAwesomeIcon icon={faPauseCircle} />
                </div>
            }
              <video id={"canvas-video-"  + (this.props.location.pathname.split('/').pop())} className="canvas-video">
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