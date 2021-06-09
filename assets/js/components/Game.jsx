import React, { Component } from 'react';
import Question from './Question';

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
        <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A8001%2Fgame&layout=button&size=small&width=81&height=20&appId" width="81" height="20" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">test</iframe>
        {
          this.state.start
            ? <AllQuestions />
            : <div className="modal-play-game">
                <div className="header-modal">
                  <div>
                    <p>PLACES</p>
                    <h5>10 <span className="h6">Offertes</span></h5>
                  </div>
                  <h5>Jeu<br/>concours</h5>
                  <div>
                    <p>DATE</p>
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
       allResponses: []
    }
  }

  addResponse = (response) => {
    const newAllResponses = this.state.allResponses
    newAllResponses.push(response)
    this.setState({allResponses: newAllResponses})
    console.log(this.state.allResponses)
  }
  

  render() {
    return (
      <React.Fragment>
        {Array(4).fill(0).map((value, index) => {
          return (
            <Question key={index} index={index} addResponse={this.addResponse} />
          )
        })}
      </React.Fragment>
    )
  }
}