
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'

export type NavLink = {
  href: string,
  name: string,
  disabled?: boolean,
}

export interface NavList {
  name: string;
  icon: string;
  href?: string;
  routes?: NavLink[];
  disabled?: true;
}

export interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}