import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import { Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { 
  AppBar, 
} from './drawerUtils';

interface NavbarProps {
  isDrawerOpen: boolean;
  handleDrawerOpen: () => void;
}

const Navbar = ({
  isDrawerOpen,
  handleDrawerOpen,
}: NavbarProps) => {
  return (
    <AppBar position="fixed" open={isDrawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isDrawerOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          <Link href="/">
            <a>Dashboard</a>
          </Link>
        </Typography>
        <Typography variant="subtitle1" ml={3}>
          <Link href="/another-page">
            <a>Dynamic Link Example</a>
          </Link>
        </Typography>
        <Typography variant="subtitle1" ml={4}>
          <Link href="/clients">
            <a>Dynamic Nested Link Example</a>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;