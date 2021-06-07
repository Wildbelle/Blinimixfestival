import React, { Component } from 'react';
import SceneButton from '../components/SceneButton';
import { ThemeContext, themes } from '../theme-context';

class InteractiveMap extends Component {
  static contextType = ThemeContext

  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  
  }

  componentDidMount() {
    this.context.changeTheme('white')
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="logo">Home</div>
        <div className="page-interactive-map">
          <div className="bloc-interactive-map">
            <div className="item">
              {Object.keys(themes).map((value, index) => {
                if (index > 0 && index < 4) {
                  return (
                    <SceneButton
                      key={index}
                      theme={Object.values(themes)[index]}
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
                    />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InteractiveMap;