import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

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
      console.log('click')
      console.log('state', this.state.videoPlay)
      if(this.state.videoPlay) {
        video.pause()
        this.setState({videoPlay: false})
      } else {
        video.play()
        this.setState({videoPlay: true})
      }
    })
  }
  

  render() {
    const { videoName } = this.context.theme
    return (
      <React.Fragment>
        {this.state.visiblePage
          ? <div className="container-video" style={{height: "100%", width: "100%", zIndex: 999999}}>
            {!this.state.videoPlay
              ? <div className="icon-play" style={{
                  width: "10px",
                  height: "10px",
                  background: "#EBEBEB",
                  border: "1px solid red",
                  zIndex: 9999,
                  position: "absolute",
                  top: "50%",
                  left: "50%"
                }}></div>
              : <div className="icon-play" style={{
                  width: "10px",
                  height: "10px",
                  background: "#000",
                  border: "1px solid red",
                  borderRadius: "50px",
                  zIndex: 9999,
                  position: "absolute",
                  top: "50%",
                  left: "50%"
                }}></div>
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