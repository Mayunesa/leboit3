import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
  Container,
  Stack
} from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from 'lucide-react';
import logo from '../../Assets/img/logo.svg';

const pages = [
  { title: 'Inicio', path: '/' },
  { title: 'Productos', path: '/productos' },
  { title: 'Colecciones', path: '/colecciones' },
  { title: 'Personaliza tu Caja', path: '/personalizar' },
  { title: 'Regalo Corporativo', path: '/corporativo' },
  { title: 'Contacto', path: '/contacto' }
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} alt="Logo" style={{ height: 'auto', maxWidth: '40%' }}/>
          </Typography>

          {/* Menú hamburguesa para móvil */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo para móvil */}
          <Typography
            variant="h6"
            noWrap
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              justifyContent: 'center'
            }}
          >
            Le Boîte
          </Typography>

          {/* Navegación para pantallas grandes */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center'
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Stack>

          {/* Barra de búsqueda */}
          <Box
            sx={{
              position: 'relative',
              backgroundColor: '#f5f5f5',
              borderRadius: 1,
              marginLeft: 2,
              width: isMobile ? '100%' : 'auto',
              maxWidth: { xs: '100%', sm: '20rem' }
            }}
          >
            <IconButton
              sx={{
                padding: 1,
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)'
              }}
            >
              <SearchIcon size={20} />
            </IconButton>
            <InputBase
              placeholder="Buscar productos..."
              sx={{
                width: '100%',
                padding: 1,
                paddingRight: '3rem'
              }}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;