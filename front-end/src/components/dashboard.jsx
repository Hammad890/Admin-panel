import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Dashboardview from './numbers';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Link } from 'react-router-dom';

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       <h2>  <AdminPanelSettingsIcon /> Dashboard </h2>
          <ListItem key="UserManagement" disablePadding>
            <ListItemButton component={Link} to="/userman">
            <ListItemIcon >
             <GroupAddIcon/>
             </ListItemIcon>
              <ListItemText primary="User management" />
            </ListItemButton>
          </ListItem>
          <ListItem key="ProductManagement" disablePadding>
        <ListItemButton component={Link} to="/product">
          <ListItemIcon>
            <InventoryIcon />
          </ListItemIcon>
          <ListItemText primary="Product management" />
        </ListItemButton>
      </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['Menu'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
      <Dashboardview/>
    </div>
  );
}
