import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Box, Container, Grid, Typography } from '@mui/material'

const About = () => {

    return (
        <PageContainer bannerTitle='Haqqımızda'>
            <Container>
                <Grid container py={6} spacing={2}>
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-start' }
                        }}
                    >
                        <Box sx={{ maxWidth: "500px !important" }}>
                            <img style={{ width: '100%', borderRadius: 10 }} src='/zdanie.png' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Typography variant='h4'>“NetPro Group MMC” şirkəti haqqında</Typography>
                        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.</Typography>
                        <Typography variant='body1'> Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices sed ac lobortis at.</Typography>
                        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.</Typography>
                    </Grid>
                </Grid>
                <Grid container py={6} spacing={4}>
                    <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', gap: 2 }}>
                        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.</Typography>
                        <Typography variant='body1'> Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor, sollicitudin. Ultrices sed ac lobortis at.</Typography>
                        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio elementum.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-end' }
                        }}
                    >
                        <Box sx={{ maxWidth: "500px !important" }}>
                            <img style={{ width: '100%', borderRadius: 10 }} src='/zdanie.png' />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </PageContainer>
    )
}
export default About
