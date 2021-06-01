import React, { Component } from 'react';
// const  LoadingPage = React.lazy(() => import('../routes/LoadingPage'))
// const  Home = React.lazy(() => import('../routes/Home'))
import LoadingPage from '../routes/LoadingPage'
import Home from '../routes/Home'
import { ThemeContext } from '../theme-context';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class Theme extends Component {
  static contextType = ThemeContext

  render() {
    return (
      <React.Fragment>
        <div
          className="background"
          style={{backgroundColor: this.context.theme.color}}
        >
          <Router>
            <Route exact path="/" component={LoadingPage} />
            <Route exact path="/home" component={Home} />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default Theme;