import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { DrawerHeader, Drawer, theme } from './drawerUtils';
import ExpandableListItem from './ExpandableListItem';
import DrawerItem from './DrawerItem';
import { navConfig } from '../../config/navigationConfig';
import Navbar from './Navbar';
import { ThemeProvider } from '@emotion/react';
import { NavList } from '../../models/navbar-models';

interface DrawerProps {
  children: JSX.Element;
}

export default function ExpandableDrawer({children}: DrawerProps) {
  const [open, setOpen] = React.useState(false);
  const [openSubDrawer, setOpenSubDrawer] = React.useState('');
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpenSubDrawer('');
    setOpen(false);
  };

  const handleToggleDrawer = (navItem: string) => {
    if(!open) setOpen(true);
    if(openSubDrawer === navItem) {
      setOpenSubDrawer('');
    } else {
      setOpenSubDrawer(navItem);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar isDrawerOpen={open} handleDrawerOpen={handleDrawerOpen}/>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" noWrap component="div" ml={2}>
              Company Links
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon color="secondary" />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {navConfig.map((navItem: NavList) => {
              return (
                <>
                  {!navItem?.routes ? (
                    <DrawerItem 
                      name={navItem.name}
                      href={navItem.href ?? '/'}
                      icon={navItem.icon}
                      shouldPadIcon={!open}
                      shouldDisable={navItem?.disabled} 
                    />
                  ) : (
                    <ExpandableListItem
                      name={navItem.name}
                      icon={navItem.icon}
                      href={navItem.href}
                      routes={navItem.routes ?? []}
                      disabled={navItem?.disabled}
                      setActiveNavItem={handleToggleDrawer}
                      openDrawer={openSubDrawer}
                      shouldPadIcon={!open}
                    />
                  )}
                </>
              );
            })}
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <section id="content">
            {children}
          </section>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
