import { createContext } from 'react';

const AuthContext = createContext({ signed: false });

export default AuthContext;