import React, { Component } from 'react';
import Recepie from './Recepie';

class Recepies extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       recepies: [],
       visiblePage: false
    }
  }
  

  componentDidMount() {
    setTimeout(() => {
      this.setState({visiblePage:true})
    }, 3000)

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
        {this.state.visiblePage
          ? this.state.recepies.map((value, index) => {
              return (
                <Recepie key={index} index={index} recepie={value} />
              )
            })
          : null
        }
      </React.Fragment>
    );
  }
}

export default Recepies;