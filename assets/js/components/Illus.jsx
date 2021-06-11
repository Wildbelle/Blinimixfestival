import React, { Component } from 'react';
import { ThemeContext } from '../theme-context';

export default class Illus extends Component {
  static contextType = ThemeContext

  render() {
    const { illusName } = this.context.theme
    return (
      <React.Fragment>
        <div className="container-illus">
            <div className="block-img">
              <img src={"/img/" + illusName} type="svg" />
            </div>
        </div>
      </React.Fragment>
    );
  }
}