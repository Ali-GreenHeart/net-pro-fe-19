import React from 'react'
import { Box, Container, Typography, Stack, Grid, Divider } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const ServiceCards = ({ title, body, image }) => {

  return (
    <Card sx={{ maxWidth: 375, borderRadius: '15px' }} elevation={6}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={`${title} image`}
          sx={{ padding: 2, height: '270px', borderRadius: '30px' }}
        />
        <CardContent >
        <Stack justifyContent={'space-around'} sx={{ minHeight: '250px' }}>
            <Typography variant="h5" component="div" color="primary">
              {title}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" color="secondary">
              {body}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ServiceCards