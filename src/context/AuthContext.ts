import { createContext } from 'react';
import { AuthService } from '../services/authService';

export interface AuthContext {
    isAuthorized: boolean;
    setIsAuthorized: (params: any) => void;
    authService: AuthService;
}

export const AuthContext = createContext<AuthContext>(null);

AuthContext.displayName = 'AuthContext';

export const AuthProvider = AuthContext.Provider;
