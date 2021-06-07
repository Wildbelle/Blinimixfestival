import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';
import Game from './Game';
import Navigation from './Navigation';
import Recepies from './Recepies';

class Scene extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)
  
    this.state = {
       navVisible: true,
       gameModalOpen: false,
       recepiesModalOpen: false
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
        recepiesModalOpen
      }
    } = this
    
    this.context.changeTheme(name)

    switch (pathname) {
      case "/food":
        if (navVisible) {
          this.setState({navVisible: false, recepiesModalOpen: true})
        }
        if (!recepiesModalOpen) {
          this.setState({recepiesModalOpen: true})
        }
        break;
      case "/game":
        if (navVisible) {
          this.setState({navVisible: false, gameModalOpen: true})
        }
        if (!gameModalOpen) {
          this.setState({gameModalOpen: true})
        }
        break;
      case "/scene/1":
        !navVisible && this.setState({navVisible: true})
        break;
      case "/scene/2":
        !navVisible && this.setState({navVisible: true})
        break;
      case "/scene/3":
        !navVisible && this.setState({navVisible: true})
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
      }
    } = this
    return (
      <React.Fragment>
        <Navigation navVisible={navVisible} />

        {gameModalOpen
          ? <Game />
          : null
        }
        {recepiesModalOpen
          ? <Recepies />
          : null
        }

         <h1 className="title-scene" dangerouslySetInnerHTML={{__html: theme.title.replaceAll(' ', '</br>')}}></h1>
     </React.Fragment>
    );
  }
}

export default Scene;