import React, { Component } from 'react';

class Recepie extends Component {
  constructor(props) {
    super(props)

    this.hide = this.hide.bind(this)
  
    this.state = {
       visible: true
    }
  }

  hide () {
    this.setState({visible: false})
  }

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
        recepie
      },
      state: {
        visible
      },
      hide
    } = this
    return (
      <React.Fragment>
        {visible && <div className={"modal-recepie-" + (index)}>
          <button className="btn-close" onClick={() => hide()}>X</button>
          <div className="grid-recepie">
            <div>
              <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
            </div>
            <div></div>
          </div>
        </div>}
      </React.Fragment>
    );
  }
}

export default Recepie;