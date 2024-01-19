import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AsteroidDetail = ({ match }) => {
  const {id} = useParams();

  console.log(id);

  const [asteroid, setAsteroid] = useState(null);
  useEffect(() => {
    const fetchAsteroid = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=kgbPpJxsbaQVhph1iYKH71u0z7PHTuOPcjQutnGS`
        );

        setAsteroid(response.data);
      } catch (error) {
        console.error('Error fetching asteroid details:', error);
      }
    };

    fetchAsteroid();
  }, [id]);

  return (
    <Container>
      <Box>
        <Card sx={{m:2}}>
          <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Asteroid Details
          </Typography>
          {asteroid && (
                <div>
                  <Typography variant="h5" component="div">
                    {asteroid.name}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Diameter: {asteroid.estimated_diameter.meters.estimated_diameter_max} meters
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Closest Approach Date: {asteroid.close_approach_data[0].close_approach_date}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Miss Distance: {asteroid.close_approach_data[0].miss_distance.kilometers} kilometers
                  </Typography>
                </div>
              )}
          </CardContent>
        </Card>
      </Box>    
    </Container>
  );
};

export default AsteroidDetail;