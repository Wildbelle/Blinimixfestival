import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import ModalCgi from './ModalCgi';


import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FormGame(props) {
  const { register, handleSubmit } = useForm();
  const {revele, toggle} = ModalCgi();
  const [message, setMessage] = useState(false)

  const onSubmit = (data) => {
    data.items = props.responses
    fetch('/api/participants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(result => {
      if(result.ok) {
        setMessage(true)
        setTimeout(() => {
          props.history.push('/map')
        }, 3000)
      }
    })
  }

  const Modal = ({revele, cache}) => revele ? (
      <React.Fragment>
        <div className="overlay"/>

        <div className="wrapper">
          <div className="modal-cgi">
              <div className="header-modal">
                <button className="btn btn-close" onClick={cache}><FontAwesomeIcon icon={faTimes}/></button>
              </div>
              <div className="content-modal">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam modi debitis deserunt ipsum iusto ut vero consectetur repudiandae, voluptatum non mollitia autem asperiores tempore molestiae. Dolorum soluta incidunt id sint.
                  </p>
              </div>
          </div>
        </div>
      </React.Fragment>

      ) : null;

    return (
      <React.Fragment>
        {message
          ? <div className="message-form">Votre participation a bien été enregistré !</div>
          : <div className="card-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <select name="civility" id="civility-select" ref={register} name="civility">
                  <option value="">Civilité</option>
                  <option value="M.">Monsieur</option>
                  <option value="Mme.">Madame</option>
                </select>
                <input type="text" placeholder="Nom" ref={register} name="lastname" />
                <input type="text" placeholder="Prénom" ref={register} name="firstname" />
                <input type="text" placeholder="Date de naissance" ref={register} name="dateOfBirth" />
                <input type="text" placeholder="Adresse mail" ref={register} name="email" />
                <div>
                  <button className="btn btn-cgi" onClick={toggle}>conditions générales du concours</button>
                  <Modal
                    revele={revele}
                    cache={toggle}
                  />
                </div>

                <button type="submit" className="btn btn-action">Je participe</button>
              </form>
            </div>
        }
        
      </React.Fragment>
    )
}

export default FormGame;