import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WalletIcon from '@mui/icons-material/Wallet';
import { useLoaderData } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <WalletIcon />
              </ListItemIcon>
              <ListItemText primary="500" secondary="alkjdofijad-234lkqaeflka-e324qfad" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <WalletIcon />
              </ListItemIcon>
              <ListItemText primary="200" secondary="alkjdofijad-234lkqaeflka-e324qfad" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}