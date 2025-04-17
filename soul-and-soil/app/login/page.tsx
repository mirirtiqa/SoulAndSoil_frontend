'use client';

import {
  Box,
  Button,
  TextField,
  Typography,
  Link as MuiLink,
  Paper,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { signUpRequest } from '@/utils/api';
import { loginRequest } from '@/utils/api';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const { login } = useAuth();

  const handleLogin = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    const payload = {
        email,
        password
    }
    try {
        const response = await signUpRequest(payload);
  
        login(response); 
      } catch (err) {
        console.error('Signup failed:', err);
      }
    window.location.href = '/';
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        px: isSmall ? 2 : 0,
      }}
    >
      <Paper elevation={3} sx={{ p: isSmall ? 3 : 4, width: '100%', maxWidth: 400 }}>
        <Typography variant="h5" gutterBottom>
          Log In
        </Typography>
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Log In
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don&apos;t have an account?{' '}
            <MuiLink component={Link} href="/signup">
              Sign up
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
