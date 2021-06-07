import React, { Component } from 'react';
import { recepies } from '../theme-context';
import Recepie from './Recepie';

class Recepies extends Component {
  render() {
    return (
      <React.Fragment>
        {recepies.map((value, index) => {
          return (
            <Recepie key={index} index={index} recepie={value} />
          )
        })}
      </React.Fragment>
    );
  }
}

export default Recepies;