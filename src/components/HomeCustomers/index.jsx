import React from 'react'
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"
const logos = ['logos/logo1.svg', 'logos/logo2.svg', 'logos/logo3.svg', 'logos/logo4.svg', 'logos/logo5.svg', 'logos/logo6.svg', 'logos/logo7.svg', 'logos/logo8.svg']

const HomeCustomers = () => {
    return (
        <Box sx={{ bgcolor: 'info.main', minHeight: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'1rem 0' }}>
            <Container>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant="h3" color="primary.main" sx={{ fontWeight: 600, padding: 1 }}>
                            Partnyorlar və Müştərilər</Typography>
                    </Grid>
                    <Grid container item xs={12} sm={12} md={8}>
                        {logos.map((logo, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
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
