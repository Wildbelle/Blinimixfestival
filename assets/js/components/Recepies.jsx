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
    }, 1000)

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
        <div className="grid-recepie">
          {this.state.visiblePage
            ? this.state.recepies.map((value, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="card-recepie">
                      Recepie {index}
                    </div>
                    <Recepie index={index} recepie={value} />
                  </React.Fragment>
                )
              })
            : null
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Recepies;