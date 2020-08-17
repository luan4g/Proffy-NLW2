import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Background from '../../../assets/images/background.svg';
import logo from '../../../assets/images/logo.svg'
import purpleHeart from '../../../assets/images/icons/purple-heart.svg';
import showPassword from '../../../assets/images/icons/show-password.svg'
import hidePassword from '../../../assets/images/icons/hide-password.svg'

import './styles.css';

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState('password')
  const [iconPassword, setIconPassword] = useState(showPassword)

  function handleVisible() {
    iconPassword === showPassword
      ? setPasswordVisible('text')
      : setPasswordVisible('password')

    passwordVisible === 'password'
      ? setIconPassword(hidePassword)
      : setIconPassword(showPassword)
  }

  return (
    <div className="all">
      <aside>
        <div className="intro">
          <img src={logo} alt="Proffy" className="logo"/>
          <p>Sua plataforma de estudos online</p>
        </div>
        <img src={Background} alt="Background" className="background"/>
      </aside>
      <main>
        <div className="form">
          <h2>Fazer Login</h2>

          <div className="input-group">
            <div className="input">
              <label htmlFor="Email">E-mail</label>
              <input type="text" placeholder="Email" />
            </div>

            <div className="input">
              <div className="column">
                <label htmlFor="Senha">Senha</label>
                <input type={passwordVisible} placeholder="Senha"  />
              </div>
              <img onClick={handleVisible} src={iconPassword} alt="show"/>
            </div>
          </div>

          <div className="row">
            <label className="checkbox" >
              Lembrar Senha
              <input type="checkbox"/>
              <span className="checkmark"></span>
            </label>

            <a href="#">Esqueci minha senha</a>
          </div>

          <button>
            Entrar
          </button>
        </div>
      
        <footer>
          <p>Não tem conta?<br/>
            <Link to="/signup">Cadastre-se</Link>
          </p>

          <p>É de graça
            <img src={purpleHeart} alt="Purple heart"/>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default Signin;