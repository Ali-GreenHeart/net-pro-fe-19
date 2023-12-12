import React, { useState } from 'react'
import { Box, Container, Grid, Typography, Stack } from "@mui/material"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, } from 'swiper/modules';
import Logo from './Logo';

export const Brands = () => {
    const [init, setInit] = useState(false)
    return (
        <Box className="brands-swiper" bgcolor={'primary.main'} sx={{ backgroundPosition: 'cover', position: 'relative', padding: '1.5rem 0' }} >
            <img src='/brandsHome/bgBrands.png' alt="img" style={{
                opacity: '0.3',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }} />
            <Container>
                <Grid container>
                    <Grid item xs={12} md={3} sx={{ padding: '0.5rem' }}>
                        <Typography variant='h3' component='h1' color='info.main' sx={{ fontWeight: 600 }}>
                            Brendlər
                        </Typography >
                    </Grid>
                    <Grid item xs={12} md={9} sx={{ position: 'relative', padding: '1rem' }} >

                        <Swiper
                            loop
                            onInit={() => setInit(true)}
                            spaceBetween={30}
                            pagination={{
                                type: "bullets",
                                dynamicBullets: true,
                                clickable: true,

                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '2rem', justifyContent: 'center', alignItems: 'center' }} >
                                    <Logo image={'/brandsHome/brandsLogo1.png'} />
                                    <Logo image={'/brandsHome/brandsLogo2.png'} />
                                    <Logo image={'/brandsHome/brandsLogo3.png'} />
                                </Stack>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '2rem', justifyContent: 'center', alignItems: 'center' }} >
                                    <Logo image={'/brandsHome/brandsLogo4.png'} />
                                    <Logo image={'/brandsHome/brandsLogo5.png'} />
                                    <Logo image={'/brandsHome/brandsLogo6.png'} />
                                </Stack>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '2rem', justifyContent: 'center', alignItems: 'center' }} >
                                    <Logo image={'/brandsHome/brandsLogo7.png'} />
                                    <Logo image={'/brandsHome/brandsLogo8.png'} />
                                    <Logo image={'/brandsHome/brandsLogo9.webp'} />
                                </Stack>
                            </SwiperSlide>
                        </Swiper>
                        {init && (
                            <style>
                                {`
                         .brands-swiper .swiper-slide.swiper-slide-active{
                            min-height:15vh !important;
                        }
                         
                      .brands-swiper .swiper-pagination *{
                            width:8px !important;
                            height:8px !important;
                            opacity:1 !important;
                        }
                      .brands-swiper .swiper-pagination .swiper-pagination-bullet-active-next{
                            background-color: transparent !important;
                            border:2px solid white;
                            width:8px !important;
                        }         
                      .brands-swiper .swiper-pagination .swiper-pagination-bullet-active-next-next,
                      .brands-swiper .swiper-pagination .swiper-pagination-bullet-active-prev,
                      .brands-swiper .swiper-pagination .swiper-pagination-bullet-active-prev-prev
                        {
                            background-color: transparent !important;
                            border:2px solid white;
                        }      
                      .brands-swiper .swiper-pagination-bullet-active {
                            background-color:white;
                        }
                      .brands-swiper .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next,
                      .brands-swiper .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next,
                      .brands-swiper .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev,
                      .brands-swiper .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev
                        {
                            transform:scale(1.0);
                        }
                      
                                        `}
                            </style>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )

}
