import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import FlareIcon from '@mui/icons-material/Flare';
import Typography from "@mui/material/Typography";
import { Container } from '@mui/material';

const AsteroidList = () => {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const fetchAsteroids = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-01-19&end_date=2024-01-26&api_key=kgbPpJxsbaQVhph1iYKH71u0z7PHTuOPcjQutnGS'
        );

        const asteroidData = Object.values(response.data.near_earth_objects).flat();
        setAsteroids(asteroidData);
      } catch (error) {
        console.error('Error fetching asteroid data:', error);
      }
    };

    fetchAsteroids();
  }, []);

  return (
    <Container >
<Typography variant="h2" align='center'>Asteroid List</Typography>
      <Box sx={{ width: '100%',   bgcolor: 'background.paper' }}>
        <List>
        {asteroids.map((asteroid) => ( 
          <ListItem  sx={{bgcolor:'secondary.main'}} disablePadding component="a" href={`/asteroid/${asteroid.id}`}>
          <ListItemButton>
            <ListItemIcon>
                  <FlareIcon sx={{color:'purple'}} />
                </ListItemIcon>
                  <ListItemText disableTypography  primary={<Typography variant="body2" style={{ color: '#FFFFFF' }}>{asteroid.name}</Typography>} />
              </ListItemButton>
              <Divider />
          </ListItem>
          
        ))}
        
        </List>
      </Box>
    </Container>
      
    
  );
};

export default AsteroidList;