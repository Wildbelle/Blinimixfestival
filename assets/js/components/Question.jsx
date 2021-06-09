import React, { Component } from 'react';

class Question extends Component {
  constructor(props) {
    super(props)

    this.reply = this.reply.bind(this)
  
    this.state = {
     answers: [],
     visible: true
    }
  }

  componentDidMount() {
    const { index } = this.props
    const modal = document.querySelector(`.modal-question-${index}`)
    modal.style.top = `${51 - index}%`
    modal.style.left = `${51 - index}%`
    modal.style.zIndex = 4 - index

    this.setState({
      answers: [
        "reponse1",
        "reponse2",
        "reponse3",
        "reponse4"
      ]
    })
  }

  reply (response) {
    this.props.addResponse({
      question: this.props.index + 1,
      response: response
    })
    this.setState({visible: false})
  }
  
  render() {
    const {
      props: {
        index
      },
      state: {
        answers,
        visible
      },
      reply
    } = this
    return (
      <React.Fragment>
        {visible && <div className={"modal-question-" + (index)}>
          <div className="header-modal">
            <h6>{index + 1}.</h6>
            <button className="btn btn-close" onClick={() => reply(null)}><FontAwesomeIcon icon={faTimes}/></button>
          </div>
          <p>Combien y t-il d'artistes présent à cette première édition ?</p>
          <div className="grid-answer">
            {answers.map((value, index) => (
              <button key={index} className="btn-answer" onClick={() => reply(value)} > {value} </button>
            ))}
          </div>
        </div>}
      </React.Fragment>
    );
  }
}

export default Question;