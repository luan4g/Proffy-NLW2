import React from 'react';
import { Link } from 'react-router-dom';

import backgroundSuccess from '../../../assets/images/success-background.svg';
import iconSuccess from '../../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function SuccessSignup() {
  return (
    <div className="container-success">
      <img src={backgroundSuccess} alt="Background" className="background" width="75%"/>

      <div className="center">
        <img src={iconSuccess} alt="Success"/>

        <h2>Cadastro Concluído</h2>

        <p>Agora você faz parte da plataforma Proffy.<br/>Tenha uma ótima experiência.</p>
      </div>

      <Link to="/home">
        Fazer Login
      </Link>
    </div>
  )
}

export default SuccessSignup;