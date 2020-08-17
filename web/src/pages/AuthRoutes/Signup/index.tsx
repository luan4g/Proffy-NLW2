import React, { useState } from 'react';

import logo from '../../../assets/images/logo.svg'
import background from '../../../assets/images/background.svg'
import backIcon from '../../../assets/images/icons/back.svg'
import showPassword from '../../../assets/images/icons/show-password.svg'
import hidePassword from '../../../assets/images/icons/hide-password.svg'

import './styles.css';
import { Link } from 'react-router-dom';
import InputForm from '../../../components/InputForm';

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState('password');
  const [iconPassword, setIconPassword] = useState(showPassword)

  function handleVisible() {
    passwordVisible === 'password'
      ? setIconPassword(hidePassword)
      : setIconPassword(showPassword)

    iconPassword === showPassword
      ? setPasswordVisible('text')
      : setPasswordVisible('password')
  }

  return (
    <div className="all">
      <main>
        <div className="header">
          <Link to="/signin">
            <img src={backIcon} alt="back"/>
          </Link>
        </div>
        <div className="form">
          <h2>Cadastro</h2>
          <p>Preencha os dados abaixo para começar</p>

          <div className="input-group">
            <InputForm name="name" label="Nome" placeholder="Nome" />

            <InputForm name="surname" label="Sobrenome" placeholder="Sobrenome" />
            
            <InputForm name="email" label="E-mail" placeholder="E-mail" />

            <div className="input">
              <div className="column">
                <label htmlFor="name">Senha</label>
                <input type={passwordVisible} placeholder="Senha" />
              </div>
              <img onClick={handleVisible} src={iconPassword} alt="Show"/>
            </div>
          </div>

          <button>
            Concluir cadastro
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

export default Signup;