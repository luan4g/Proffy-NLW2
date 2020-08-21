import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';

import backIcon from '../../../assets/images/icons/back.svg';
import logo from '../../../assets/images/logo.svg'
import background from '../../../assets/images/background.svg';
import hidePass from '../../../assets/images/icons/hide-password.svg';
import showPass from '../../../assets/images/icons/show-password.svg';
import api from '../../../services/api';
import InputForm from '../../../components/InputForm';

const Reset: React.FC = () => {
  const history = useHistory();
  const { token } = useParams()

  const [passVisible, setPassVisible] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(showPass);
  const [wrong, setWrong] = useState('')

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  useEffect(() => {
    password !== confirm 
     ? setWrong('wrong')
     : setWrong('normal')
  }, [password, confirm])

  function handlePassVisible() {
    if (passVisible === 'password') {
      setPassVisible('text');
      setEyeIcon(hidePass)
    } else {
      setPassVisible('password');
      setEyeIcon(showPass)
    }
  }

  async function handleSubmit() {
    if(password !== '' && password === confirm) {
      try {
        await api.put(`reset-password/${token}`, {
          email,
          password
        })
        history.push('/reset-success')
      } catch {
        alert('Erro ao tentar resetar o password! Token inválido ou Sistema fora de funcionamento. Tente novamente em alguns instantes')
      }
    } else {
      alert('Por favor, preencha com dados válidos!');
    }
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
          <h2>Reset Password</h2>
          <p>Para redefinir sua senha, basta preencher os dados abaixo</p>

          <div className="input-group">
            <InputForm name="email" label="E-mail" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <div className="input pass">
              <div className="column">
                <label htmlFor="pass">Senha</label>
                <input 
                  type={passVisible} 
                  value={password}
                  placeholder="Senha" 
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <img src={eyeIcon} alt="pass-visible" onClick={handlePassVisible} />
            </div>

            <div className="input pass" id={wrong}>
              <div className="column">
                <label htmlFor="confirm-pass">Confirme</label>
                <input 
                  type="password" 
                  value={confirm}
                  placeholder="Confirme a senha" 
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button className="button" onClick={handleSubmit} >
            Enviar
          </button>
        </div>
      </main>
      <aside>
        <div className="intro">
          <img src={logo} alt="Proffy"/>
          <p>Sua platforma de estudos online.</p>
        </div>
        <img className="background" src={background} alt=""/>
      </aside>
    </div>
  )
}

export default Reset;