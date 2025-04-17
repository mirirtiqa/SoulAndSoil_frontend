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

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { signup } = useAuth();

  const handleSignup = async(e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
        name,
        email,
        token:"dummytoken",
        password
    }
    try {
        const response = await signUpRequest(payload);
  
        signup(response); 
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
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSignup}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            Sign Up
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <MuiLink component={Link} href="/login">
              Log in
            </MuiLink>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
