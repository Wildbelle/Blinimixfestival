import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';
import Navigation from './Navigation';

class Scene extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)
  
    this.state = {
       navVisible: true
    }
  }

  componentDidUpdate() {
    console.log('mount scene')
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
        navVisible
      }
    } = this
    
    this.context.changeTheme(name)

    switch (pathname) {
      case "/food":
        navVisible && this.setState({navVisible: false})
        break;
      case "/game":
        navVisible && this.setState({navVisible: false})
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
        navVisible
      }
    } = this
    return (
      <React.Fragment>
       <Navigation navVisible={navVisible} />
       <h1 className="title-scene" dangerouslySetInnerHTML={{__html: theme.title.replaceAll(' ', '</br>')}}></h1>
     </React.Fragment>
    );
  }
}

export default Scene;