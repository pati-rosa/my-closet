// hooks/useAuth.ts
import { useState } from 'react';
import { createUser, signInUser, signOutUser } from '../utils/firebase';
import { UserCredential } from 'firebase/auth';

type AuthState = {
  loading: boolean;
  error: string | null;
  user: UserCredential | null;
};

export const useAuth = () => {
  const [state, setState] = useState<AuthState>({
    loading: false,
    error: null,
    user: null,
  });

  const signUp = async (email: string, password: string) => {
    setState({ loading: true, error: null, user: null });

    try {
      const userCredential = await createUser(email, password);
      setState({ loading: false, error: null, user: userCredential });
    } catch (error) {
      setState({ loading: false, error: (error as any).message, user: null });
    }
  };

  const signIn = async (email: string, password: string) => {
    setState({ loading: true, error: null, user: null });

    try {
      const userCredential = await signInUser(email, password);
      setState({ loading: false, error: null, user: userCredential });
    } catch (error) {
      setState({ loading: false, error: (error as any).message, user: null });
    }
  };

  const signOut = async () => {
    setState({ loading: true, error: null, user: null });

    try {
      await signOutUser();
      setState({ loading: false, error: null, user: null });
    } catch (error) {
      setState({ loading: false, error: (error as any).message, user: null });
    }
  };

  return { ...state, signUp, signIn, signOut };
};
