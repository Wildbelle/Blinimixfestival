import React, { Component } from 'react';
import LoadingPage from '../routes/LoadingPage'
import InteractiveMap from '../routes/InteractiveMap'
import { ThemeContext } from '../theme-context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Scene from './Scene';

import ReactCookieFirst from "react-cookiefirst";
import { adform } from 'react-vue-adform';

const params = {
  pm: 2377172,
  divider: encodeURIComponent('|'),
  pagename: encodeURIComponent('LP Blinimix Festival')
};

adform.initialize(params);

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
          <ReactCookieFirst apiKey="af692491-489f-43a1-bc16-42763011252b" />
          {/* <CookieConsent
            location="bottom"
            enableDeclineButton={true}
            buttonText="J'accepte"
            declineButtonText="Je décline"
            cookieName="monCookieDeLespace"

            style={{
              color: "#262c7e",
              background: "#FFF",
              borderTop: "2px solid #262c7e",
              fontFamily: "GillSans"
            }}

            declineButtonClasses="btn"
            buttonClasses="btn"

            declineButtonStyle={{
              color: "#262c7e",
              background: "transparent",
              border: "2px solid #262c7e"
            }}

            buttonStyle={{
              color: "#262c7e",
              background: "transparent",
              border: "2px solid #262c7e"
            }}
          >Nous utilisons des cookies pour optimiser notre site web et notre service.</CookieConsent> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;