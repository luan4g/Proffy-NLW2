import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputForm from '../../../components/InputForm';
import api from '../../../services/api';

import logo from '../../../assets/images/logo.svg'
import background from '../../../assets/images/background.svg'
import backIcon from '../../../assets/images/icons/back.svg'
import showPassword from '../../../assets/images/icons/show-password.svg'
import hidePassword from '../../../assets/images/icons/hide-password.svg'

import './styles.css';

const Signup = () => {
  const history = useHistory();

  const [passwordVisible, setPasswordVisible] = useState('password');
  const [iconPassword, setIconPassword] = useState(showPassword)

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignUp() {
    try {
      const user = {
        name,
        surname,
        email,
        password
      }
  
      await api.post('create-account', user)
      history.push('/success-signup')
    } catch {
      alert('Ocorreu um erro ao tentar se cadastrar, preencha os inputs com dados válidos!')
    }
  }

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
          <Link to="/home">
            <img src={backIcon} alt="back"/>
          </Link>
        </div>
        <div className="form">
          <h2>Cadastro</h2>
          <p>Preencha os dados abaixo para começar</p>

          <div className="input-group">
            <InputForm 
              name="name" 
              label="Nome" 
              placeholder="Nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <InputForm 
              name="surname" 
              label="Sobrenome" 
              placeholder="Sobrenome"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
            />
            
            <InputForm 
              name="email" 
              label="E-mail" 
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email} 
            />

            <div className="input">
              <div className="column">
                <label htmlFor="name">Senha</label>
                <input 
                  type={passwordVisible} 
                  placeholder="Senha" 
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <img onClick={handleVisible} src={iconPassword} alt="Show"/>
            </div>
          </div>

          <button className="button" onClick={handleSignUp}>
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