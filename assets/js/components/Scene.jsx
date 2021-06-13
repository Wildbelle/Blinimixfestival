import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

import Navigation from './Navigation';
import Sidebar from './Sidebar';

import Game from './Game';
import Recepies from './Recepies';
import Video from './Video';
import Illus from './Illus';

export default class Scene extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)
  
    this.state = {
       navVisible: true,
       gameModalOpen: false,
       recepiesModalOpen: false,
       sceneVideo: false,
    }
  }

  setupTheme = () => {
    const {
      props: {
        location: {
          state: {
            theme: {
              name
            }
          },
          pathname
        }
      },
      state: {
        navVisible,
        gameModalOpen,
        recepiesModalOpen,
        sceneVideo
      }
    } = this
    
    this.context.changeTheme(name)

    switch (pathname) {
      case "/food":
        if (navVisible) {
          this.setState({
            navVisible: false,
            recepiesModalOpen: true,
            gameModalOpen: false,
            sceneVideo:false
          })
        }
        if (!recepiesModalOpen) {
          this.setState({
            recepiesModalOpen: true,
            gameModalOpen: false,
            sceneVideo:false
          })
        }
        break;
      case "/game":
        if (navVisible) {
          this.setState({
            navVisible: false,
            gameModalOpen: true,
            recepiesModalOpen: false,
            sceneVideo:false
          })
        }
        if (!gameModalOpen) {
          this.setState({
            gameModalOpen: true,
            recepiesModalOpen: false,
            sceneVideo:false
          })
        }
        break;
      case "/scene/1":
        if(!navVisible) {
          this.setState({
            navVisible: true,
            gameModalOpen: false,
            recepiesModalOpen: false,
            sceneVideo:true
          })
        }
        if(!sceneVideo) {
          this.setState({
            gameModalOpen: false,
            recepiesModalOpen: false,
            sceneVideo:true
          })
        }
        break;
      case "/scene/2":
        if(!navVisible) {
          this.setState({
            navVisible: true,
            gameModalOpen: false,
            recepiesModalOpen: false,
            sceneVideo:true
          })
        }
        if(!sceneVideo) {
          this.setState({
            gameModalOpen: false,
            recepiesModalOpen: false,
            sceneVideo:true
          })
        }
        break;
      case "/scene/3":
        if(!navVisible) {
          this.setState({
            navVisible: true,
            gameModalOpen: false,
            recepiesModalOpen: false,
            sceneVideo:true
          })
        }
        if(!sceneVideo) {
          this.setState({
            gameModalOpen: false,
            recepiesModalOpen: false,
            sceneVideo:true
          })
        }
        break;
    
      default:
        break;
    }
  }

  componentDidMount() {
    this.setupTheme()
  }

  componentDidUpdate() {
    this.setupTheme()
  }

  render() {
    const {
      props: {
        location: {
          state: {
            theme
          }
        }
      },
      state: {
        navVisible,
        gameModalOpen,
        recepiesModalOpen,
        sceneVideo
      }
    } = this
    return (
      <React.Fragment>
        <Sidebar />
        <div className="container">
        <Navigation {...this.props} navVisible={navVisible} />

        {gameModalOpen
          ? <Game {...this.props} />
          : null
        }
        {recepiesModalOpen
          ? <Recepies />
          : null
        }
        {sceneVideo
          ? <Video {...this.props} />
          : null
        }
        <Illus />
        <div className="title-scene">
        <h1 dangerouslySetInnerHTML={{__html: theme.title.replaceAll(' ', '</br>')}}></h1>
        <h5 className="subtitle-scene">by blini</h5>
        </div>
        </div>
     </React.Fragment>
    );
  }
}
