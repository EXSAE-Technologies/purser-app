import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Paper from '@mui/material/Paper';
import {Outlet} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Root() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PURSER
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm">
        <Outlet />
      </Container>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Account" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}