import React from 'react';

import backgroundSuccess from '../../../assets/images/success-background.svg';
import iconSuccess from '../../../assets/images/icons/success-check-icon.svg';
import { Link } from 'react-router-dom';

function SuccessReset() {
  return (
    <div className="container-success">
      <img src={backgroundSuccess} alt="background" className="background" width="75%" />

      <div className="center">
        <img src={iconSuccess} alt="success-check-icon"/>

        <h2>Redefinição concluída!</h2>
        <p>A partir de agora, a sua senha será a que você acabou de definir.<br/>Agora você poderá fazer login em nossa plataforma, <b>Vamos lá?!</b></p>

      </div>
      
      <Link to="home">
        Fazer Login
      </Link>
    </div>
  )
}

export default SuccessReset;