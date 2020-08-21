import React from 'react';
import { Link } from 'react-router-dom';

import backgroundSuccess from '../../../assets/images/success-background.svg';
import iconSuccess from '../../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function SuccessReset() {
  return (
    <div className="container-success">
      <img src={backgroundSuccess} alt="Background" className="background" width="75%"/>

      <div className="center">
        <img src={iconSuccess} alt="Success"/>

        <h2>Redefinição Enviada!</h2>

        <p>Boa, agora é só checar o e-mail que foi enviado para você<br/>redefinir sua senha e aproveitar os estudos.</p>
      </div>

      <Link to="/home">
        Fazer Login
      </Link>
    </div>
  )
}

export default SuccessReset;