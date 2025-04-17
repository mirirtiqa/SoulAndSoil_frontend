'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { useAuth } from '@/context/AuthContext';



const navLinks = [
  { label: 'Browse Picnics', path: '/book' },
//   { label: 'Signup', path: '/signup' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, logout } = useAuth();

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };
  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            Soul and Soil
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              edge="end"
              onClick={toggleDrawer(true)}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  color="inherit"
                  component={Link}
                  href={link.path}
                >
                  {link.label}
                </Button>
              ))}
              {user ? (
                <Button color="inherit" onClick={handleLogout}>
                Logout
                </Button>

              ) : (
                <Button color="inherit" component={Link} href="/login">
                  Login
                </Button>
              )}
              {user && (
                <Button color="inherit" component={Link} href="/profile">
                  {user.name}
                </Button>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding>
                <ListItemButton component={Link} href={link.path}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            {user ? (
              <ListItem>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem>
                <ListItemButton component={Link} href="/login">
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            )}
            {user && (
              <ListItem>
                <ListItemButton component={Link} href="/profile" sx={{
                    border: '1px solid #f2e8cf',
                     }}>
                  <ListItemText primary={user.name} />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
