import React from 'react';

import Background from '../../../assets/images/background.svg';
import logo from '../../../assets/images/logo.svg'
import purpleHeart from '../../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Signin = () => {
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
              <label htmlFor="Senha">Senha</label>
              <input type="text" placeholder="Senha" />
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
            <a href="#">Cadastre-se</a>
          </p>

          <p>É de graça
            <img src={purpleHeart} alt=""/>
          </p>
        </footer>
      </main>
    </div>
  )
}

export default Signin;