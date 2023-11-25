import React from 'react'
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"

const logos = ['public/logo1.svg', 'public/logo2.svg', 'public/logo3.svg', 'public/logo4.svg', 'public/logo5.svg', 'public/logo6.svg', 'public/logo7.svg', 'public/logo8.svg']

const HomeCustomers = () => {
    return (
        <Box sx={{ bgcolor: 'info.main', minHeight: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h3" color="primary.main" sx={{ fontWeight: 600, padding: 1 }}>
                            Partnyorlar və Müştərilər</Typography>
                    </Grid>
                    <Grid container item xs={12} sm={6} md={8}>
                        {logos.map((logo, index) => {
                            return (
                                <Grid item xs={6} md={3} key={index}>
                                    <img alt={logo.slice(6)} src={logo} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>

            </Container>
        </Box>
    )
}

export default HomeCustomers
