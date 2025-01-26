import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';

const useFirebaseCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      return userCredential.user.uid;
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error, success };
};

export default useFirebaseCreateUser;