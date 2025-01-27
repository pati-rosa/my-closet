import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../hooks/useFirebaseAuth';
import { useQueryClient } from 'react-query';

interface UserContextType {
  uid: string | null;
  setUid: (uid: string | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [uid, setUid] = useState<string | null>(null);
  const navigate = useNavigate()
  const queryClient = useQueryClient();
  const { signOut} = useAuth()

  const logout = async() => {
    await signOut()
    setUid(null)
    queryClient.invalidateQueries('top-clothes');
    queryClient.invalidateQueries('underwear');
    navigate('/')
  }

  return (
    <UserContext.Provider value={{ uid, setUid, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};