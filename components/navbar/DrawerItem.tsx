import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import { iconDict } from './DrawerIcons';

interface DrawerItemProps {
  name: string;
  href: string;
  icon: string;
  shouldPadIcon?: boolean;
  shouldDisable?: boolean;
}

const DrawerItem = ({
  name,
  href,
  icon,
  shouldPadIcon,
  shouldDisable=false,
}: DrawerItemProps) => {
  return (
    <Link href={href} passHref>
      <ListItemButton
        key={name}
        sx={{
          minHeight: 48,
          justifyContent: shouldPadIcon ? 'initial' : 'center',
          px: 2.5,
        }}
        disabled={shouldDisable}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: shouldPadIcon ? 3 : 1,
            justifyContent: 'center',
          }}
        >
          { iconDict[icon] }
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default DrawerItem;