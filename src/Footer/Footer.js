// src/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(28, 28, 55, 0.99)',
        color: 'white',
        padding: 2,
        position: 'relative',
        bottom: 0,
        width: '100%',
        height:'100px'
      }}
    >
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} My Application. All rights reserved.
      </Typography>
      <Typography variant="body2" align="center">
        Subtotal: storeData | Payment Method: Payment Method
      </Typography>
    </Box>
  );
};

export default Footer;
