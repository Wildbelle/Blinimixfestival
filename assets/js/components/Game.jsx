import React, { Component } from 'react';
import Question from './Question';
import { questions } from '../theme-context'

export default class Game extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       start: false
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {
          this.state.start
            ? <AllQuestions />
            : <div className="modal-play-game">
                <div className="header-modal">
                  <div>
                    <p className="info">PLACES</p>
                    <h5>10 <span className="h6">Offertes</span></h5>
                  </div>
                  <h5>Jeu<br/>concours</h5>
                  <div>
                    <p className="info">DATE</p>
                    <h5>4 <span className="h6">Sept.</span></h5>
                  </div>
                </div>

                <div className="body-modal">
                  <p>Tentez de gagner 10 places pour le Positive Urban Festival qui aura lieu le 4 septembre 2021 au Zénith et des super kits apéro du festivalier</p>
                </div>

                <div className="block-btn">
                  <button className="btn btn-action" onClick={() => this.setState({start: true})}>jouer</button>
                </div>
              </div>
        }
      </React.Fragment>
    );
  }
}

class AllQuestions extends React.Component {

  constructor(props) {
    super(props)
  
    this.addResponse = this.addResponse.bind(this)

    this.state = {
       allResponses: [],
       questions: []
    }
  }

  componentDidMount() {
    fetch('/api/questions', {
      headers: {
        "Accept": 'application/json'
      }
    })
      .then(result => result.json())
      .then(data => this.setState({questions: data}))
  }

  addResponse = (response) => {
    const newAllResponses = this.state.allResponses
    newAllResponses.push(response)
    this.setState({allResponses: newAllResponses})
  }
  

  render() {
    return (
      <React.Fragment>
        {/* {this.state.questions.length > 0 && this.state.questions.map((value, index) => {
          return (
            <Question key={index} index={index} question={value} addResponse={this.addResponse} />
          )
        })} */}
      </React.Fragment>
    )
  }
}