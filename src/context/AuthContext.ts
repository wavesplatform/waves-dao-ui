import { createContext } from 'react';
import { AuthService } from '../services/authService';

export const AuthContext = createContext<AuthService>(null);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = AuthContext.Provider;
