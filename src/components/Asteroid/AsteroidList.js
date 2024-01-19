import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import Typography from "@mui/material/Typography";
import { Card,CardContent, Container } from '@mui/material';

import  cover from "../../images/asteroid.jpg";



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
      <Container>
        <Box mb={2} sx={{height:'80vh', borderRadius: '16px', boxShadow: 1, backgroundImage:`url(${cover})`,backgroundRepeat: "no-repeat",  backgroundSize: "cover"}} >
          <Typography variant="h2" pr={3} pb={2} pt={2} align='end'sx={{color:'white'}} >ASTEROIDS</Typography>
          <Typography ml={3} variant="body2" gutterBottom style={{color:'white'}}> 
            An asteroid is a minor planet—an object that is neither a true planet <br/>
            nor a comet—that orbits within the inner Solar System. They are rocky, <br/>
            metallic or icy bodies with no atmosphere. Sizes and shapes of <br/>
            asteroids vary significantly, ranging from 1-meter rocks to a dwarf <br/>
            planet almost 1000 km in diameter.
          </Typography>
          <Typography ml={3}  variant="body2" gutterBottom style={{color:'white'}}> 
            In this list we can find some of the asteroids that NASA was able to record.
          </Typography>
          <Card style={{marginLeft:'16px', marginTop:'5vh'}} sx={{maxWidth:'485px', bgcolor:'rgba(108, 122, 137,0.5)'}}>
            <CardContent>
              <List style={{maxHeight: '30vh', overflow: 'auto'}}>
                {asteroids.map((asteroid) => ( 
                  <ListItem    disablePadding component="a" href={`/asteroid/${asteroid.id}`}>
                    <ListItemButton>
                      <ListItemText  disableTypography  primary={<Typography variant="body2" style={{ color: '#FFFFFF', fontSize:'12px'}}>{asteroid.name}</Typography>} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </CardContent> 
          </Card>
        </Box>
      </Container>
      
  );
};

export default AsteroidList;