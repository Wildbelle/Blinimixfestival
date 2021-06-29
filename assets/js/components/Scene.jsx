import React, { Component } from 'react';
import { ThemeContext, themes } from '../theme-context';

import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Footer from './Footer';

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
       sceneVideo: false
    }
  }

  assignThemeByUrl = () => {
    const path = this.props.location.pathname 
    switch (path) {
      case "/food":
        this.props.history.push(path, {
          theme: themes.pink
        })
        break;
      case "/game":
        this.props.history.push(path, {
          theme: themes.blue
        })
        break;
      case "/scene/1":
        this.props.history.push(path, {
          theme: themes.red
        })
        break;
      case "/scene/2":
        this.props.history.push(path, {
          theme: themes.yellow
        })
        break;
      case "/scene/3":
        this.props.history.push(path, {
          theme: themes.green
        })
        break;
      default:
        break;
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
    if(!this.props.location.state) {
      this.assignThemeByUrl()
    } else {
      this.setupTheme()
    }
  }
  
  componentDidUpdate() {
    this.setupTheme()
  }

  render() {
    const {
      props: {
        location: {
          state
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
          {/* <h1 dangerouslySetInnerHTML={{__html: theme.title.replaceAll(' ', '</br>')}}></h1>
          <h5 className="subtitle-scene">{theme.subtitle}</h5> */}
        </div>
        <Footer />
        </div>
     </React.Fragment>
    );
  }
}
