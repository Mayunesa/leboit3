import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box, TextField, Typography, Paper } from '@mui/material';
import theme from './style';
import Navbar from './components/layout/Navbar';
import Home from './Home';
import WhatsAppButton from './WhatsAppButton';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box sx={{ position: 'relative', minHeight: '100vh' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <WhatsAppButton />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;