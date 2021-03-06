import React, { useState, useEffect, useContext } from 'react';
import { FaPowerOff } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import api from '../../../services/api';
import AuthContext from '../../../contexts/auth';

import logoImg from '../../../assets/images/logo.svg';
import landingImg from '../../../assets/images/landing.svg'

import studyIcon from '../../../assets/images/icons/study.svg'
import giveClassIcon from '../../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../../assets/images/icons/purple-heart.svg'

import './styles.css';

function Landing() {
  const history = useHistory();
  const { signOut } = useContext(AuthContext)
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(res => {
      const {total} = res.data;

      setTotalConnections(total)
    })
  }, [])

  function handleSignOut() {
    signOut();
    history.push('/home')
  }

  return(
    <div id="page-landing">
      <div className="header">
        <button onClick={handleSignOut}>
          <FaPowerOff size="2.4rem" color="#888" />
        </button>
      </div>
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg} alt="Plataforma de estudos" className="hero-image"
          />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassIcon} alt="Dar Aulas"/>
            Dar Aulas
          </Link>
        </div>
        
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;