import React from 'react'
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"

const logos = ['public/logo1.svg', 'public/logo2.svg', 'public/logo3.svg', 'public/logo4.svg', 'public/logo5.svg', 'public/logo6.svg', 'public/logo7.svg', 'public/logo8.svg']

const HomeCustomers = () => {
    return (
        <Box sx={{ bgcolor: 'info.main', minHeight: '30vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container>
                <Stack flexDirection='row' spacing={2} sx={{gap:'2rem'}}>
                    <Typography variant="h3" color="primary.main" sx={{ fontWeight: 600, padding:1}}>
                    Partnyorlar və Müştərilər</Typography>
                    <Box sx={{display:'flex', flexWrap:'wrap', border:'1px solid red', gap:'1rem'}}>
                        {logos.map((logo, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <img alt={logo.slice(6)} src={logo}/>
                                </React.Fragment>
                            )
                        })}

                    </Box>
                </Stack>

            </Container>
        </Box>
    )
}

export default HomeCustomers