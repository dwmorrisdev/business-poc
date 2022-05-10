import { styled, Theme, CSSObject, createTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import { AppBarProps } from '../../models/navbar-models';

// mui theme for drawer and appbar
export const theme = createTheme({
  palette: {
    secondary: {
      main: '#fefefe', // white color of text
      dark: '#454243', // dark color for background in drawer
    },
    info: {
      main: '#123369' // dark blue color of appbar
    }
  }
});

// sets width of the drawer
export const drawerWidth = 270;

// styled components for appbar and drawer

// styles for when the drawer is open
export const openedMixin = (theme: Theme): CSSObject => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.dark,
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

// styles for when the drawer is closed
export const closedMixin = (theme: Theme): CSSObject => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.dark,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

// Drawer Header styles
export const DrawerHeader = styled('div')(({ theme }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.secondary.dark,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// drawer styles (sets open/closed)
export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

// appbar styles for when drawer is open/closed
export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.info.main,
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

