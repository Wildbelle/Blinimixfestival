import React, { Component } from 'react';
import { DesktopCard, MobileCard } from './Recepie';

class Recepies extends Component {

  constructor(props) {
    super(props)
  
    this.activeRecepie = this.activeRecepie.bind(this)

    this.state = {
       recepies: [],
       visiblePage: false,
       recepieActive: 0,
       mobile: false
    }
  }

  activeRecepie = (index) => {
    this.setState({recepieActive: index})
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

    
    window.innerWidth < 770 && this.setState({mobile:true})
    window.addEventListener('resize', () => {
      if(this.state.mobile && window.innerWidth > 770) {
        this.setState({mobile: false})
      } else if (!this.state.mobile && window.innerWidth < 770) {
        this.setState({mobile: true})
      }
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="grid-recepie-all">
          {this.state.visiblePage
            ? this.state.recepies.map((recepie, index) => {
                return (
                  <div key={index} className="card-recepie" onClick={() => this.activeRecepie(recepie.id)}>
                    <div className="content-card-recepie">
                      <img src={`/img/recepie_${index + 1}.png`} alt="image de la recette" />
                      <div className="block-title-card-recepie">
                        <h6 className="title-recepie">{recepie.name}</h6>
                      </div>
                    </div>
                  </div>
                )
              })
            : null
          }

          {this.state.recepies.map((recepie, index) => {
            if(this.state.recepieActive === recepie.id) {
              if(this.state.mobile) {
                return (
                  <MobileCard
                    key={index}
                    {...this.props}
                    index={index}
                    recepie={recepie}
                    hide={() => this.activeRecepie(0)}
                  />
                )
              } else {
                return (
                  <DesktopCard
                    key={index}
                    {...this.props}
                    index={index}
                    recepie={recepie}
                    hide={() => this.activeRecepie(0)}
                  />
                )
              }
            }
          })

          }
        </div>
      </React.Fragment>
    );
  }
}

export default Recepies;