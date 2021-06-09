import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Recepie extends Component {
  constructor(props) {
    super(props)

    this.hide = this.hide.bind(this)
  
    this.state = {
       visible: true,
       mobile: false
    }
  }

  hide = () => {
    this.setState({visible: false})
  }

  componentDidMount() {
    document.addEventListener('resize', () => {
      // mettre en place le state mobile
    })
  }
  render() {
    const {
      props,
      state: {
        visible,
        mobile
      },
      hide
    } = this
    return (
      <React.Fragment>
        {visible && 
          mobile
            ? <MobileCard {...props} hide={hide} />
            : <DesktopCard {...props} hide={hide} />
        }
      </React.Fragment>
    );
  }
}

class MobileCard extends React.Component {

  componentDidMount() {
    console.log('props', this.props)
    const { index } = this.props
    const modal = document.querySelector(`.modal-recepie-${index}`)
    modal.style.top = `${51 - index}%`
    modal.style.left = `${51 - index}%`
    modal.style.zIndex = 4 - index
  }

  render() {
    const {
      props: {
        index,
        recepie,
        hide
      }
    } = this

    return (
      <div className={"modal-recepie-" + (index)}>
        <button className="btn btn-close" onClick={() => hide()}><FontAwesomeIcon icon={faTimes}/></button>
        <div className="grid-recepie">
          <div>
            <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
          </div>
          <div></div>
        </div>
      </div>
    )
  }
}

class DesktopCard extends React.Component {

  componentDidMount() {
    const { index } = this.props
    const modal = document.querySelector(`.modal-recepie-${index}`)
    modal.style.top = `${51 - index}%`
    modal.style.left = `${51 - index}%`
    modal.style.zIndex = 4 - index
    console.log(this.props.recepie)
  }

  render() {
    const {
      props: {
        index,
        recepie,
        hide
      }
    } = this

    return (
      <div className={"modal-recepie-" + (index)}>
        <button className="btn btn-close" onClick={() => hide()}><FontAwesomeIcon icon={faTimes}/></button>
        <div className="grid-recepie">
          <div className="block-img-recepie">
            <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
          </div>
          <div className="grid-step-recepie">
            <h3>{recepie.name}</h3>
            {recepie.steps.map(step => {
              if (step.index < 4) {
                return (
                  <div className="step-recepie">
                    <h5>{step.index}.</h5>
                    <p>{step.text}</p>
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
}