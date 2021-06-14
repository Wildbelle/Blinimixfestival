import React, { Component } from 'react';
import SceneButton from '../components/SceneButton';
import { ThemeContext, themes } from '../theme-context';

import NavigationMap from '../components/NavigationMap';
import Sidebar from './../components/Sidebar';
import Footer from '../components/Footer';

class InteractiveMap extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)

    this.setupTitleMap = this.setupTitleMap.bind(this)

    this.state = {
      items: [],
      title: "",
      subtitle: "",
      mobile: false,
      visibleCGV: true
    }
  
  }

  componentDidMount() {
    const { mobile } = this.state

    this.context.changeTheme('white')
    
    window.innerWidth < 992 && this.setState({mobile:true})
    
    window.addEventListener('resize', () => {
      if(mobile && window.innerWidth > 992) {
        this.setState({mobile: false})
      } else if (!mobile && window.innerWidth < 992) {
        this.setState({mobile: true})
      }
    })
  }

  setupTitleMap = (title) => {
    if(title !== "") {
      this.setState({title: title.replace(' ', '<br/>'), subtitle: "by Blini"})
    } else {
      
      this.setState({title: title.replace(' ', '<br/>'), subtitle: ""})
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <Footer />
        <div className="bubble-bkg"></div>
        <Sidebar />
        <div className="container">
          <div className="title-map">
          <h1 dangerouslySetInnerHTML={{__html: this.state.title}}></h1>
          <h5 className="subtitle-scene">{this.state.subtitle}</h5>
          </div>
          <NavigationMap {...this.props} />
          <div className="page-interactive-map">
            <div className="blinks-click"><h6>Cliquez sur une illustration !</h6></div>
            {this.state.mobile
              ? <React.Fragment>
                  <div className="bloc-interactive-map">
                    <div className="item">
                      {Object.keys(themes).map((value, index) => {
                        if (index > 0 && index < 4) {
                          return (
                            <SceneButton
                              key={index}
                              theme={Object.values(themes)[index]}
                              setupTitleMap={this.setupTitleMap}
                            />
                    
                          )
                        }
                      })}
                    </div>
                    <div className="item">
                      {Object.keys(themes).map((value, index) => {
                        if (index > 3) {
                          return (
                            <SceneButton
                              key={index}
                              theme={Object.values(themes)[index]}
                              setupTitleMap={this.setupTitleMap}
                            />
                            
                          )
                        }
                      })}
                    </div>
                  </div>
                </React.Fragment>
              : <DesktopMap {...this.props} setupTitleMap={this.setupTitleMap} />
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

class DesktopMap extends React.Component {

  componentDidMount() {
    const canvas = document.querySelector('.canvas-map')
    let scale = window.innerHeight / 1080
    canvas.style.transform = `translate(-50%, -50%) scale(${(scale).toFixed(2)})`
    
    window.addEventListener('resize', () => {
      let scale = window.innerHeight / 1080
      canvas.style.transform = `translate(-50%, -50%) scale(${(scale).toFixed(2)})`
    })

  }

  render() {
    return (
      <React.Fragment>
        <div className="canvas-map blinks-illus">
          <img src="/img/IllusMap.png" className="global" alt="scene svg" />
          {Object.keys(themes).map((value, index) => {
            const current = Object.values(themes)[index]
            if (index > 0) {
              return (
                <SceneButton
                  key={index}
                  theme={Object.values(themes)[index]}
                  setupTitleMap={this.props.setupTitleMap}
                  desktop={true}
                />
              )
            }
          })}
        </div>
      </React.Fragment>
    )
  }
}

export default InteractiveMap;