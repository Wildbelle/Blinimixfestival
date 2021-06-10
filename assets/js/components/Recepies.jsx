import React, { Component } from 'react';
import Recepie from './Recepie';

class Recepies extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       recepies: []
    }
  }
  

  componentDidMount() {
    fetch('/api/recepies', {
      headers: {
        "Accept": 'application/json'
      }
    })
      .then(result => result.json())
      .then(data => this.setState({recepies: data}))
  }
  render() {
    return (
      <React.Fragment>
        {this.state.recepies.map((value, index) => {
          return (
            <Recepie key={index} index={index} recepie={value} />
          )
        })}
      </React.Fragment>
    );
  }
}

export default Recepies;