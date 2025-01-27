// filepath: /Users/patirosa/Documents/my-closet/src/components/Register.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Typography, Alert } from '@mui/material';

import { useUser } from '../../context/useUser';
import { useAuth } from '../../hooks/useFirebaseAuth';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  const { setUid } = useUser()
  const { signUp,error} = useAuth()

  const handleNavigation = (path: string) => {
      navigate(path); 
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const userCredential = await signUp(email, password);
    if (userCredential) {
      const uid = userCredential.user.uid;
      setUid(uid);
      alert('Usuário criado com sucesso!');
      handleNavigation('/upload-photos');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Meu guarda roupa virtual
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          Coloque todas suas roupas em um só lugar e monte looks incríveis!
        </Typography>
        <Typography variant="h5" component="h1" gutterBottom>
          Receba a ajuda de estilistas renomados!
        </Typography>
        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          {error && (
            <Alert severity="error" style={{ marginTop: '16px' }}>
              {error === "Firebase: Error (auth/email-already-in-use)." && "Email já cadastrado"}
              {error === "Firebase: Password should be at least 6 characters (auth/weak-password)." && "Senha deve ter no mínimo 6 caracteres"}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px', backgroundColor: 'black' }}
          >
            Criar conta
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;