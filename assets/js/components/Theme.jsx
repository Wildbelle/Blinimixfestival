import React, { Component } from 'react';
import LoadingPage from '../routes/LoadingPage'
import InteractiveMap from '../routes/InteractiveMap'
import { ThemeContext } from '../theme-context';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Theme extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <React.Fragment>
        <div
          className="main"
          style={{backgroundColor: this.context.theme.color}}
        >
          <Router>
            <Route exact path="/" component={LoadingPage} />
            <Route exact path="/map" component={InteractiveMap} />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;