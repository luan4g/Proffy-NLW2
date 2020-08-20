import React, { createContext, useState } from 'react';

interface AuthContextData {
  signed: boolean,
  user: object | null
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = (props) => {
  const [user, setUser] = useState<object | null>(null)


  return (
    <AuthContext.Provider value={{ signed: !!user, user }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;