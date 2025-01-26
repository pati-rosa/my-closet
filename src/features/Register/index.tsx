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
  const { signUp, user,error} = useAuth()

  const handleNavigation = (path: string) => {
      navigate(path); 
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    signUp(email, password);
    const uid = user?.user.uid
    if (uid) {
      setUid(uid);
      alert('Usuário criado com sucesso!');
      handleNavigation('/upload-photos');
    }
    if (error) {
      alert('Erro ao criar usuário'+error);
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
          Registrar
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
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Criar conta
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;