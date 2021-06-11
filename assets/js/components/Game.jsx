import React, { Component } from 'react';
import FormGame from './FormGame';
import Question from './Question';

export default class Game extends Component {
  constructor(props) {
    super(props)
  
    this.addResponse = this.addResponse.bind(this)
  
    this.state = {
       start: true,
       end: false,
       allResponses: [],
       visiblePage: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({visiblePage:true})
    }, 3000)
  }

  addResponse = (response) => {
    const newAllResponses = this.state.allResponses
    newAllResponses.push(response)
    if(newAllResponses.length == 4) {
      this.setState({allResponses: newAllResponses, end: true})
    } else {
      this.setState({allResponses: newAllResponses})
    }
  }
  
  render() {
    return (
      <React.Fragment>
        {
          this.state.visiblePage
          ? this.state.start

              ? this.state.end
                ? <FormGame {...this.props} responses={this.state.allResponses} />
                : <AllQuestions addResponse={this.addResponse} />

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
            : null
        }
      </React.Fragment>
    );
  }
}

class AllQuestions extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
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
  

  render() {
    return (
      <React.Fragment>
        {this.state.questions.length > 0 && this.state.questions.map((value, index) => {
          return (
            <Question key={index} index={index} question={value} addResponse={this.props.addResponse} />
          )
        })}
        {/* <FormGame /> */}
      </React.Fragment>
    )
  }
}