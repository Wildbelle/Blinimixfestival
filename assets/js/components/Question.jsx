import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        index,
        question
      },
      state: {
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
          <p>{question.question}</p>
          <div className="grid-answer">
            {question.answers.map((value, index) => (
              <button key={index} className="btn-answer" onClick={() => reply(value)} > {value.text} </button>
            ))}
          </div>
        </div>}
      </React.Fragment>
    );
  }
}

export default Question;