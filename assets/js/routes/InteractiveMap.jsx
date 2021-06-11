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
    this.context.changeTheme('white')
  }

  setupTitleMap = (title) => {
    this.setState({title: title.replace(' ', '<br/>')})
  }
  
  render() {
    return (
      <React.Fragment>
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
              : <div>DEsktop</div>
            }
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InteractiveMap;