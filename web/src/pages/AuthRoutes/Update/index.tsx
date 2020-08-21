import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';

import logo from '../../../assets/images/logo.svg';
import background from '../../../assets/images/background.svg';
import backIcon from '../../../assets/images/icons/back.svg'

import './styles.css'

const Reset = () => {
  const history = useHistory()
  const [time, setTime] = useState(false)

  const [email, setEmail] = useState('');
  const [buttonState, setButtonState] = useState('');

  useEffect(() => {
    email === ''
      ? setButtonState('off')
      : setButtonState('')
  }, [email])

  async function handleSubmit() {
    setButtonState('off')
    if(!time) {
      setTime(true)
      try {
        await api.post('forgot-password', {
          email
        })
        setButtonState('off')
        history.push('/update-success');
      } catch {
        alert('Ocorreu um erro ao tentar enviar o email para a redefinição!')
      }
    }
  }

  return (
    <div className="all">
      <main>
        <div className="header">
          <Link to="/home">
            <img src={backIcon} alt="Back"/>
          </Link>
        </div>
        <div className="form">
          <h2>Eita, esqueceu sua senha?</h2>

          <p>Não esquenta, vamos dar um jeito nisso.</p>

          <div className="input-reset">
            <input 
              type="text" 
              id='email' 
              placeholder="E-mail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>

          <button className="button" id={buttonState} onClick={handleSubmit} >
            Enviar
          </button>
        </div>
      </main>
      <aside>
        <div className="intro">
          <img src={logo} alt="Proffy" className="logo"/>
          <p>Sua plataforma de estudos online</p>
        </div>
        <img src={background} alt="Background" className="background"/>
      </aside>
    </div>
  )
}

export default Reset;