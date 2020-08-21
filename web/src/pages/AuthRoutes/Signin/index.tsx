import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../../../components/InputForm';

import Background from '../../../assets/images/background.svg';
import logo from '../../../assets/images/logo.svg'
import purpleHeart from '../../../assets/images/icons/purple-heart.svg';
import showPassword from '../../../assets/images/icons/show-password.svg'
import hidePassword from '../../../assets/images/icons/hide-password.svg'

import './styles.css';
import AuthContext from '../../../contexts/auth';

const Signin = () => {
  const { signIn, fchecked, checked } = useContext(AuthContext)

  const [passwordVisible, setPasswordVisible] = useState('password')
  const [iconPassword, setIconPassword] = useState(showPassword)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleVisible() {
    iconPassword === showPassword
      ? setPasswordVisible('text')
      : setPasswordVisible('password')

    passwordVisible === 'password'
      ? setIconPassword(hidePassword)
      : setIconPassword(showPassword)
  }

  function handleSignin() {
    signIn(email, password);
  }

  function handleChecked() {
    fchecked();
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
            <InputForm 
              name="Email" 
              label="E-mail" 
              placeholder="E-mail" 
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <div className="input pass">
              <div className="column">
                <label htmlFor="Senha">Senha</label>
                <input 
                  type={passwordVisible} 
                  placeholder="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <img onClick={handleVisible} src={iconPassword} alt="show"/>
            </div>
          </div>

          <div className="row">
            <label className="checkbox" >
              Lembrar Senha
              <input type="checkbox" checked={checked} onChange={handleChecked} />
              <span className="checkmark"></span>
            </label>

            <Link to="/update-password">Esqueci minha senha</Link>
          </div>

          <Link to="/home" className="button" onClick={handleSignin}>
            Entrar
          </Link>
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