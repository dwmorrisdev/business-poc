import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItemIcon, Tooltip, Typography } from '@mui/material';
import { NavLink } from '../../models/navbar-models';
import { iconDict } from '../IconDict';
import { HtmlTooltip } from './drawerUtils';

interface ExpandableListItemProps {
  name: string;
  routes: NavLink[];
  disabled?: boolean;
  icon: string;
  setActiveNavItem: (name: string) => void;
  openDrawer: string;
  shouldPadIcon?: boolean;
  href?: string;
}

const ExpandableListItem = ({
  name,
  routes,
  disabled,
  icon,
  setActiveNavItem,
  openDrawer,
  shouldPadIcon = false,
  href= "",
}: ExpandableListItemProps) => {
  const isSelected = name === openDrawer;
  return (
    <>
      <Link href={href} passHref>
        <ListItemButton
            key={name}
            sx={{
              minHeight: 48,
              justifyContent: shouldPadIcon ? 'initial' : 'center',
              px: 2.5,
            }}
            onClick={() => setActiveNavItem(name)}
            disabled={disabled}
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
                    <Typography color="inherit" variant="subtitle1">{name}</Typography>
                  </>
                } placement="right" leaveDelay={200}>
                  {iconDict[icon]}
                </HtmlTooltip>
              ) : (iconDict[icon])
            }
            </ListItemIcon>
            <ListItemText primary={name} />
            {isSelected ? (
              <ExpandLess color="secondary" />
            ) : (
              <ExpandMore color="secondary" />
            )}
        </ListItemButton>
      </Link>
    <Collapse in={isSelected} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {routes?.map((route: NavLink) => (
          <Link href={route.href} key={route.href} passHref>
            <ListItemButton sx={{ pl: 4 }} disabled={route.disabled}>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </Link>   
        ))}
      </List>
    </Collapse>
    </>
  );
}

export default ExpandableListItem;