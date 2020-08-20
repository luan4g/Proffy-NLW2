import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

interface AuthContextData {
  signed: boolean,
  checked: boolean,
  user: object | null,
  fchecked(): void,
  signIn(email: string, password: string): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState<object | null>(null)
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const storagedChecked = localStorage.getItem('@Proffy:checked');

    if(storagedChecked  === 'true') {
      const storagedUser = localStorage.getItem('@Proffy:user');
      const storagedToken = localStorage.getItem('@Proffy:token');

      if(storagedToken && storagedUser) {
        setUser(JSON.parse(storagedUser));

        api.defaults.headers['Authorization'] = storagedToken
      }
    } else {
      localStorage.clear();

      setUser(null)
    }
  }, [])

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/signin', {
        email,
        password
      })

      setUser(data.user)
      
      localStorage.setItem('@Proffy:checked', JSON.stringify(remember))
      localStorage.setItem('@Proffy:user', JSON.stringify(data.user))
      localStorage.setItem('@Proffy:token', data.token);
    } catch(err) {
      alert('Erro ao realizar o login, email ou password invalid.');
    }
  }

  function signOut() {
    localStorage.clear();

    setUser(null)
  }

  function fchecked() {
    setRemember(!remember)
  }

  return (
    <AuthContext.Provider 
      value={{ 
        signed: !!user, 
        user, 
        checked: remember, 
        fchecked, 
        signIn,
        signOut
      }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;