import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function FormGame(props) {
  const { register, handleSubmit } = useForm();
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

                <button type="submit" className="btn btn-action">Je participe</button>
              </form>
            </div>
        }
        
      </React.Fragment>
    )
}

export default FormGame;