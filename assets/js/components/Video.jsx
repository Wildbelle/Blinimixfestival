import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

export default class Video extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)

    this.handleStatePlay = this.handleStatePlay.bind(this)
  
    this.state = {
       visiblePage: true,
       videoPlay: false,
       currentPath: ""
    }
  }

  handleStatePlay = () => {
    const video = document.querySelector('.canvas-video-' + (this.props.location.pathname.split('/').pop()))
    if(this.state.videoPlay) {
      console.log('pause')
      video.pause()
      this.setState({videoPlay: false})
    } else {
      console.log('play')
      video.play()
      this.setState({videoPlay: true})
    }
  }

  componentDidMount() {
    this.setState({currentPath: this.props.location.pathname})
  }

  componentDidUpdate() {
    const statePath = this.state.currentPath
    const currentPath = this.props.location.pathname

    if(currentPath !== statePath) {
      this.setState({currentPath: currentPath, visiblePage: false}, () => {
        setTimeout(() => {
          this.setState({visiblePage: true, videoPlay: false})
        }, 1500)
      })
    }
  }

  fadeIcon() {
    const icon = document.querySelector('.icon-pause')
    if(icon) {
      icon.style.opacity = 1

      setTimeout(() => {
        icon.style.opacity= 0
      }, 1500)
    }
  }
  

  render() {
    const { videoName } = this.context.theme
    return (
      <React.Fragment>
        {this.state.visiblePage
          ? <div onClick={() => this.handleStatePlay()} className={"container-video-" + (this.props.location.pathname.split('/').pop())} onMouseMove={() => this.state.videoPlay && this.fadeIcon()} style={{height: "100%", width: "100%", zIndex: 999999}}>
            {!this.state.videoPlay
              ? <div className="icon-play">
                  <FontAwesomeIcon icon={faPlayCircle} />
                </div>
              : <div className="icon-pause">
                  <FontAwesomeIcon icon={faPauseCircle} />
                </div>
            }
              <video id="canvas-video" className={"canvas-video-" + (this.props.location.pathname.split('/').pop())}>
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