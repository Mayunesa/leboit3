// WhatsAppButton.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

const WhatsAppBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 20,
  right: 20,
  backgroundColor: '#25D366',
  width: 60,
  height: 60,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '2px 2px 6px rgba(0,0,0,0.4)',
  zIndex: 1000,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  '& a': {
    fontSize: '2rem',
    color: '#ffffff',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const WhatsAppButton = () => {
  const phoneNumber = "56967027509";
  const defaultMessage = "¡Hola! ¿Qué tal?";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <WhatsAppBox>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </WhatsAppBox>
  );
};

export default WhatsAppButton;