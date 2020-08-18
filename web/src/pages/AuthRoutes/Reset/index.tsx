import React, { useState, useEffect } from 'react';

import logo from '../../../assets/images/logo.svg';
import background from '../../../assets/images/background.svg';
import backIcon from '../../../assets/images/icons/back.svg'
import { Link } from 'react-router-dom';
import InputForm from '../../../components/InputForm';

import './styles.css'

const Reset = () => {
  const [inputValue, setInputValue] = useState('');
  const [buttonState, setButtonState] = useState('');
  const [linkSuccess, setLinkSuccess] = useState('');

  useEffect(() => {
    inputValue === ''
      ? setButtonState('off')
      : setButtonState('')

    buttonState === 'off'
      ? setLinkSuccess('/reset-password')
      : setLinkSuccess('/reset-success')
  }, [buttonState, inputValue])

  return (
    <div className="all">
      <main>
        <div className="header">
          <Link to="/signin">
            <img src={backIcon} alt="Back"/>
          </Link>
        </div>
        <div className="form">
          <h2>Eita, esqueceu sua senha?</h2>

          <p>Não esquenta, vamos dar um jeito nisso.</p>

          <div className="input-reset">
            <input type="text" id='email' placeholder="E-mail" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </div>

          <Link to={linkSuccess} className="button" id={buttonState} >
            Enviar
          </Link>
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