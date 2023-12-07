import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Box, Container, Typography, Stack, Grid } from '@mui/material'
import services from '../../mockData/services'
import ServiceCards from '../../components/ServiceCards'

const ServicesP = () => {
    console.log(services);
    return (
        <PageContainer bannerTitle='Xidmətlər və Həllər'>
            <Box sx={{ bgcolor: 'info.main', minHeight: '50vh'}}>
                <Container sx={{padding:'1rem 0rem 3rem '}}>
                    <Typography variant="h4" color="primary" sx={{my:5}}>Xidmətlər və Həllərin növləri</Typography>
                    <Grid container spacing={2}>
                        {
                            services.map(({ id, title, body, image }) => {
                                return (
                                    <Grid key={id} item xs={12} sm={6} md={4}>
                                        <ServiceCards key={id} title={title} body={body} image={image} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>

                </Container>

            </Box>
        </PageContainer>
    )
}

export default ServicesP