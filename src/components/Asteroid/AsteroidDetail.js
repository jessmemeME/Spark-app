import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  cover from "../../images/asteroid2.jpg";
import {Divider}  from '@mui/material';

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
      <Box mb={2} p={2} sx={{height:'80vh', borderRadius: '16px', boxShadow: 1, backgroundImage:`url(${cover})`,backgroundRepeat: "no-repeat",  backgroundSize: "cover"}} >
        <Card sx={{marginTop:2, bgcolor:'rgba(189, 195, 199,0.3)', maxWidth:'450px', height:'45vh'}}>
        {asteroid && (
                <div>
                  <CardContent>
                    <Typography align='Center' gutterBottom variant="h5" component="h2" sx={{color:'white'}}>
                        {asteroid.name}
                    </Typography>
                  <Divider sx={{color:'white',marginBottom:3, border: '1px solid'}} variant="middle" />
                  <Typography sx={{ mb: 1.5, fontSize:'15px', color:'white'}} >
                    <b>Diameter:</b> {asteroid.estimated_diameter.meters.estimated_diameter_max} meters
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontSize:'15px', color:'white'}} >
                    <b>Closest Approach Date:</b> {asteroid.close_approach_data[0].close_approach_date}
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontSize:'15px', color:'white' }}  >
                   <b>Miss Distance:</b> {asteroid.close_approach_data[0].miss_distance.kilometers} kilometers
                  </Typography>
                  </CardContent>       
                  
                </div>
              )}
          
        </Card>
      </Box>    
    </Container>
  );
};

export default AsteroidDetail;