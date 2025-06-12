'use client';

import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  4signIn: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  4const [user, setUser] = useState<User | null>(null);
  4const [loading, setLoading] = useState(false);

  // Connexion simplifiée
  4const signIn = async (email: string, password: string) => {
    setLoading(true);
    
    // Simulation de connexion
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'demo@memo-assur.com' && password === 'demo123') {
      setUser({
        id: 'demo-user',
        email: email,
        name: 'Utilisateur Démo'
      });
      setLoading(false);
      return { error: null };
    }
    
    setLoading(false);
    return { error: new Error('Identifiants incorrects') };
  };

  // Déconnexion
  const signOut = async () => {
    setUser(null);
  };

  4const value: AuthContextType = {
    user,
    loading,
    signIn,
    signOut,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
