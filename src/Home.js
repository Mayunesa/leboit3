import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Button, 
  Typography, 
  Container, 
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import theme from './style';
import fondo1 from './Assets/img/fondo_flores_rosa.png';
import logo from './Assets/img/logo.svg';


const ContentWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.2rem',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    padding: theme.spacing(1, 3),
  },
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
        sx={{
            position: 'relative',
            backgroundColor: 'cream',
            overflow: 'hidden',
            backgroundImage: `url(${process.env.PUBLIC_URL + fondo1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      <Container maxWidth="md">
        <ContentWrapper>
          <Typography 
            variant={isMobile ? "h3" : "h2"} 
            component="h1" 
            gutterBottom 
            color="primary"
            sx={{ 
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem',
              },
            }}
          >
            <img src={logo} alt="Logo" style={{ height: 'auto', maxWidth: '100%' }} />
          </Typography>
          <Typography 
            variant={isMobile ? "body1" : "h5"} 
            paragraph 
            color="text.secondary"
            sx={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              lineHeight: 1.6,
              fontSize: {
                xs: '1rem',
                sm: '1.1rem',
                md: '1.25rem',
              },
            }}
          >
            En Le Boîte, creamos lazos familiares con cada caja. Rompamos barreras juntos, uniendo corazones a través de momentos compartidos y sabores inolvidables.
          </Typography>
          <StyledButton
            component={Link}
            to="/Chatbot"
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
          >
            Nuestros Productos
          </StyledButton>
        </ContentWrapper>
      </Container>
    </Box>
  );
}