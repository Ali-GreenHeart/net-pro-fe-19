import { Box, Container, Grid, Typography } from "@mui/material"
import HomeServiceCard from "../../components/HomeServiceCard"
import services from "../../mockData/services"
import Home1stPart from "../Home1stpart"
import HomeAbout from "../../components/homeAbout"
import React from 'react'
import HomeCustomers from "../../components/HomeCustomers"
import ProducsSwiper from '../../components/ProductsSwiper'
import { Brands } from "../../components/Brand"
import Footer from "../../components/Footer"
import Gallery from "../../components/Gallery"

const Home = () => {
    return (
        <>
            <Home1stPart />
            <HomeAbout />
            <HomeCustomers />
            <ProducsSwiper />
            <Box sx={{
                backgroundImage: 'url("https://www.netprogroup.az/front/assets/bg-6.jpg")',
                backgroundSize: 'cover',
                py: 4
            }}>
                <Container>
                    <Typography
                        color="secondary.main" variant="h6" my={1} fontWeight={600}>
                        <Box
                            sx={{
                                mr: 1,
                                display: 'inline-block',
                                width: 14,
                                height: 26,
                                bgcolor: 'secondary.main',
                                position: 'relative',
                                transform: 'scale(1.2)',
                                top: 4,
                                zIndex: 1,
                                "&::after": {
                                    content: '""',
                                    height: 20,
                                    width: 30,
                                    top: 4,
                                    backgroundColor: '#f0f0f2',
                                    position: 'absolute',
                                    transform: 'rotate(45deg)',
                                    zIndex: 3,
                                }
                            }}
                        ></Box>
                        <span style={{ position: 'relative', zIndex: 4 }}> BİZ NƏ EDİRİK? </span>
                    </Typography>
                    <Typography variant="h4" my={4} color="primary" fontWeight={600}>Xidmətlər</Typography>
                    <Grid container spacing={3}>
                        {
                            services.map(({ id, body, title }) => {
                                return (
                                    <Grid key={id} item xs={12} sm={6} md={4}>
                                        <HomeServiceCard body={body} title={title} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
                <br />
            </Box>
            <Brands />
            <Gallery />
            <Footer />
        </>
    )
}
export default Home
