// src/LoginPage.js
import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    localStorage.setItem('isLoggedin', true);
    navigate('/')
    console.log("Login form submitted");
  };

  return (
    <div className='p-[100px]'>
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: 'rgba(28, 28, 55, 0.99)',
        borderRadius: 2,
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        height: '50vh',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email Address"
          type="email"
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiInputBase-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
          sx={{
            '& .MuiInputBase-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            backgroundColor: 'white',
            color: 'rgba(28, 28, 55, 0.99)',
            '&:hover': {
              backgroundColor: 'rgba(200, 200, 200, 0.8)',
            },
          }}
          fullWidth
        >
          Login
        </Button>
      </Box>
    </Container>
    </div>
  );
};

export default LoginPage;
