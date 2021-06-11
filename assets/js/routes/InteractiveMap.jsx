import React, { Component } from 'react';
import SceneButton from '../components/SceneButton';
import { ThemeContext, themes } from '../theme-context';

import Navigation from './../components/Navigation';
import Sidebar from './../components/Sidebar';

class InteractiveMap extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)

    this.setupTitleMap = this.setupTitleMap.bind(this)

    this.state = {
      items: [],
      title: "",
      mobile: false
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
    this.setState({title: title.replace(' ', '<br/>')})
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="bubble-bkg"></div>
        <Sidebar />
        <div className="container">
          <h1 className="title-map" dangerouslySetInnerHTML={{__html: this.state.title}}></h1>
          <Navigation {...this.props} />
          <div className="page-interactive-map">
            {this.state.mobile
              ? <div className="bloc-interactive-map">
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
        <div className="canvas-map">
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