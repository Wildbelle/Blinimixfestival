import React, { Component } from 'react';
import LoadingPage from '../routes/LoadingPage'
import InteractiveMap from '../routes/InteractiveMap'
import { ThemeContext } from '../theme-context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Scene from './Scene';

import { adform } from 'react-vue-adform';

const params = {
  pm: 2377172,
  divider: encodeURIComponent('|'),
  pagename: encodeURIComponent('LP Blinimix Festival')
};
adform.initialize(params);

import ReactCookieFirst from "react-cookiefirst";


class Theme extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <React.Fragment>
        <div
          className="main"
          style={{ backgroundColor: this.context.theme.color }}
        >
          <Router>
            <Route exact path="/" component={LoadingPage} />
            <Route exact path="/map" component={InteractiveMap} />
            <Route path={['/food', '/game', '/scene']} component={Scene} />
          </Router>
          <ReactCookieFirst apiKey="401bb93e-5265-46d5-8650-477f878d1211" />
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;