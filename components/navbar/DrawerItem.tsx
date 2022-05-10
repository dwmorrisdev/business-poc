import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { iconDict } from '../IconDict';
import { HtmlTooltip } from './drawerUtils';
import Typography  from '@mui/material/Typography';

interface DrawerItemProps{
  name: string;
  href: string;
  icon: string;
  shouldPadIcon: boolean;
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
        {
          shouldPadIcon ? (
            <HtmlTooltip title={
              <>
              <Typography 
                color="inherit" 
                variant="subtitle1">
                {name}
              </Typography>
              </>
            } placement="right" leaveDelay={200}>
              {iconDict[icon]}
            </HtmlTooltip>
          ) : (iconDict[icon])
        }
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default DrawerItem;