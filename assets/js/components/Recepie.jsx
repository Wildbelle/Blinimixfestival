import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Recepie extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mobile: true
    }
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
      }
    } = this
    return (
      <React.Fragment>
        {mobile
          ? <MobileCard {...props} />
          : <DesktopCard {...props} />
        }
      </React.Fragment>
    );
  }
}

class MobileCard extends React.Component {
  constructor(props) {
    super(props)

    this.hide = this.hide.bind(this)
  
    this.state = {
      //  visible: this.props.index == 0 ? true : false,
       visible: true,
       modalWidth: 0,
       stepIndex: 0,
       sliderContainer: ""
    }
  }
  

  componentDidMount() {
    if(this.state.visible) {
      const { index } = this.props
      const modal = document.querySelector(`.modal-recepie-${index}`)
      const modalWidth = modal.getBoundingClientRect().width
      const btnClose = document.querySelector(`.btn-close-${index}`)
      const sliderContainer = document.querySelector(`.recepie-container-slider-${index}`)
      const itemsContainer = sliderContainer.children
      sliderContainer.style.width = (itemsContainer.length * modalWidth) + "px"
      itemsContainer.forEach(item => {
        item.style.width = modalWidth + "px"
      })

      modal.style.top = `${51 - index}%`
      modal.style.left = `${51 - index}%`
      modal.style.zIndex = 10 - (index * 2)
      btnClose.style.zIndex = 9 - (index * 2)
      this.setState({modalWidth: modalWidth, sliderContainer: sliderContainer})
    }
  }

  hide() {
    this.setState({visible: false})
  }

  nextStep = () => {
    const { stepIndex, modalWidth, sliderContainer } = this.state
    switch ( stepIndex) {
      case 0:
        sliderContainer.style.transform = `translateX(${((modalWidth * ( stepIndex + 1)) * -1)}px)`
        this.setState({stepIndex: 1})
        break;
      case 1:
        sliderContainer.style.transform = `translateX(${((modalWidth * ( stepIndex + 1)) * -1)}px)`
        this.setState({stepIndex: 2})
        break;
    
      default:
        break;
    }
  }

  prevStep = () => {
    const { stepIndex, modalWidth, sliderContainer } = this.state
    switch ( stepIndex) {
      case 1:
        sliderContainer.style.transform = `translateX(0px)`
        this.setState({stepIndex: 0})
        break;
      case 2:
        sliderContainer.style.transform = `translateX(${((modalWidth * ( stepIndex - 1)) * -1)}px)`
        this.setState({stepIndex: 1})
        break;
    
      default:
        break;
    }
  }

  render() {
    const {
      props: {
        index,
        recepie
      },
      state: {
        visible,
        stepIndex
      },
      hide
    } = this

    return (
      <React.Fragment>
      {visible &&
        <div className={"mobile modal-recepie-" + (index)}>
          <button className={"btn btn-close-" + (index)} onClick={() => hide()}><FontAwesomeIcon icon={faTimes}/></button>
          {stepIndex !== 0 && <button className="btn btn-prev" onClick={() => this.prevStep()}>⟵</button>}
          {stepIndex !== 2 && <button className="btn btn-next" onClick={() => this.nextStep()}>⟶</button>}
          <div className={"mobile recepie-container-slider-" + (index)}>
            <div className="item-slider grid-recepie">
              <div className="block-img-recepie">
                <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
              </div>
              <div className="slide-step-recepie">
                <div className="block-title">
                  <h4 className="title-recepie">{recepie.name}</h4>
                </div>
              </div>
            </div>
            <div className="item-slider item-slider-ingredients">
              <div className="flex-infos-time">
                <p className="item-infos-time">
                  {recepie.persons} PERS.
                </p>
                <p className="item-infos-time">
                  {recepie.timePrepa} MIN.
                </p>
                <p className="item-infos-time">
                  {recepie.timeCooking > 0 && recepie.timeCooking + " MIN."}
                </p>
              </div>
              <div className="flex-ingredients">
                {recepie.ingredients.map((list, index) => (
                  <div key={index} className="col-ingredients">
                    <h6 className="title-list-ingredient">{list.title}</h6>
                    <hr/>
                    <ul className="list-flex-ingredient">
                      {list.ingredients.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="item-slider">
              <div className="flex-steps">
                {recepie.steps.map(step => {
                  return (
                    <div key={step.index} className="step-recepie">
                      <h6>{step.index}.</h6>
                      <p>{step.text}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
    )
  }
}

class DesktopCard extends React.Component {
  constructor(props) {
    super(props)

    this.hide = this.hide.bind(this)
  
    this.state = {
       visible: true,
       modalWidth: 0,
       stepIndex: 0,
       sliderContainer: ""
    }
  }

  componentDidMount() {
    if(this.state.visible) {
      const { index } = this.props
      const modal = document.querySelector(`.modal-recepie-${index}`)
      const modalWidth = modal.getBoundingClientRect().width
      const btnClose = document.querySelector(`.btn-close-${index}`)
      const sliderContainer = document.querySelector(`.recepie-container-slider-${index}`)
      const itemsContainer = sliderContainer.children
      sliderContainer.style.width = (itemsContainer.length * modalWidth) + "px"
      itemsContainer.forEach(item => {
        item.style.width = modalWidth + "px"
      })
      
      modal.style.top = `${51 - index}%`
      modal.style.left = `${51 - index}%`
      modal.style.zIndex = 10 - (index * 2)
      btnClose.style.zIndex = 9 - (index * 2)
      this.setState({modalWidth: modalWidth, sliderContainer: sliderContainer})
    }
  }

  hide() {
    this.setState({visible: false})
  }

  nextStep = () => {
    const { stepIndex, modalWidth, sliderContainer } = this.state
    switch ( stepIndex) {
      case 0:
        sliderContainer.style.transform = `translateX(${((modalWidth * ( stepIndex + 1)) * -1)}px)`
        this.setState({stepIndex: 1})
        break;
      case 1:
        sliderContainer.style.transform = `translateX(${((modalWidth * ( stepIndex + 1)) * -1)}px)`
        this.setState({stepIndex: 2})
        break;
    
      default:
        break;
    }
  }

  prevStep = () => {
    const { stepIndex, modalWidth, sliderContainer } = this.state
    switch ( stepIndex) {
      case 1:
        sliderContainer.style.transform = `translateX(0px)`
        this.setState({stepIndex: 0})
        break;
      case 2:
        sliderContainer.style.transform = `translateX(${((modalWidth * ( stepIndex - 1)) * -1)}px)`
        this.setState({stepIndex: 1})
        break;
    
      default:
        break;
    }
  }

  render() {
    const {
      props: {
        index,
        recepie
      },
      state: {
        visible,
        stepIndex
      },
      hide
    } = this

    return (
      <React.Fragment>
        {visible &&
          <div className={"modal-recepie-" + (index)}>
            <button className={"btn btn-close-" + (index)} onClick={() => hide()}><FontAwesomeIcon icon={faTimes}/></button>
            {stepIndex !== 0 && <button className="btn btn-prev" onClick={() => this.prevStep()}>⟵</button>}
            {stepIndex !== 2 && <button className="btn btn-next" onClick={() => this.nextStep()}>⟶</button>}
            <div className={"recepie-container-slider-" + (index)}>
              <div className="item-slider grid-recepie">
                <div className="block-img-recepie">
                  <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
                </div>
                <div className="slide-step-recepie">
                  <div className="block-title">
                    <h4 className="title-recepie">{recepie.name}</h4>
                  </div>
                </div>
              </div>
              <div className="item-slider item-slider-ingredients">
                <div className="flex-infos-time">
                  <p className="item-infos-time">
                    {recepie.persons} PERS.
                  </p>
                  <p className="item-infos-time">
                    {recepie.timePrepa} MIN.
                  </p>
                  <p className="item-infos-time">
                    {recepie.timeCooking > 0 && recepie.timeCooking + " MIN."}
                  </p>
                </div>
                <div className="flex-ingredients">
                  {recepie.ingredients.map((list, index) => (
                    <div key={index} className="col-ingredients">
                      <h6 className="title-list-ingredient">{list.title}</h6>
                      <hr/>
                      <ul className="list-flex-ingredient">
                        {list.ingredients.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="item-slider">
                <div className="flex-steps">
                  {recepie.steps.map(step => {
                    return (
                      <div key={step.index} className="step-recepie">
                        <h6>{step.index}.</h6>
                        <p>{step.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}
