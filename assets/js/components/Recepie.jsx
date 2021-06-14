import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default class Recepie extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       mobile: false,
       visible: false
    }
  }

  componentDidMount() {
    const { mobile } = this.state
    window.innerWidth < 770 && this.setState({mobile:true})
    window.addEventListener('resize', () => {
      if(mobile && window.innerWidth > 770) {
        this.setState({mobile: false})
      } else if (!mobile && window.innerWidth < 770) {
        this.setState({mobile: true})
      }
    })
  }

  hide = () => {
    this.setState({visible: false})
  }

  render() {
    const {
      props: {
        recepie,
        index
      },
      state: {
        visible,
        mobile
      }
    } = this
    return (
      <React.Fragment>
        <div className="card-recepie" onClick={() => this.setState({visible: true})}>
          <div className="content-card-recepie">
            <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
            <div className="block-title-card-recepie">
              <h6 className="title-recepie">{recepie.name}</h6>
            </div>
          </div>
        </div>
        {visible
          ? mobile
            ? <MobileCard {...this.props} hide= {this.hide} />
            : <DesktopCard {...this.props} hide= {this.hide} />
          : null
        }
      </React.Fragment>
    );
  }
}

class MobileCard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       visible: true,
       modalWidth: 0,
       stepIndex: 0,
       sliderContainer: ""
    }
  }
  

  componentDidMount() {
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

    modal.style.zIndex = 20 - (index * 2)
    btnClose.style.zIndex = 20 - (index * 2)
    this.setState({modalWidth: modalWidth, sliderContainer: sliderContainer})
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
        recepie,
        hide
      },
      state: {
        visible,
        stepIndex
      }
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
                  <div key={index} className="col-ingredients">
                    <h6 className="title-list-ingredient">Ingrédients</h6>
                    <hr/>
                    <ul className="list-flex-ingredient">
                      {recepie.ingredients.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{__html: item}}></li>
                      ))}
                    </ul>
                  </div>
              </div>
            </div>
            <div className="item-slider">
              <div className="absolute-steps">
                <div className="flex-steps">
                  {recepie.steps.map((step, index) => {
                    return (
                      <div key={index} className="step-recepie">
                        <h6>{step.number}.</h6>
                        <p>{step.text}</p>
                      </div>
                    )
                  })}
                </div>
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
  
    this.state = {
       modalWidth: 0,
       stepIndex: 0,
       sliderContainer: ""
    }
  }

  componentDidMount() {
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
    
    modal.style.zIndex = 35 - (index * 2)
    btnClose.style.zIndex = 34 - (index * 2)
    this.setState({modalWidth: modalWidth, sliderContainer: sliderContainer})
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
        recepie,
        hide
      },
      state: {
        stepIndex
      }
    } = this

    return (
      <React.Fragment>
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
                  <div className="block-img-recepie">
                    <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
                  </div>
                  <div key={index} className="col-ingredients">
                    <h6 className="title-list-ingredient">Ingrédients</h6>
                    <hr/>
                    <ul className="list-flex-ingredient">
                      {recepie.ingredients.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{__html: item}}></li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
              <div className="item-slider">
                <div className="flex-steps">
                  {recepie.steps.map((step, index) => {
                    return (
                      <div key={index} className="step-recepie">
                        <h6>{step.number}.</h6>
                        <p>{step.text}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    )
  }
}
