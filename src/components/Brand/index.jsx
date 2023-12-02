import React, { useState } from 'react'
import { Box, Container, Grid, Typography, Stack } from "@mui/material"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Logo from './Logo';

export const Brands = () => {
    const [init, setInit] = useState(false)
    return (
        <Box bgcolor={'primary.main'} sx={{ backgroundPosition: 'cover', position: 'relative', padding: '1.5rem 0' }} >
            <img src='../../../public/brandsHome/bgBrands.png' alt="img" style={{
                opacity: '0.3',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }} />
            <Container sx={{ textAlign: 'center' }}>
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
                                    <Logo image={'../../../public/brandsHome/brandsLogo1.png'} />
                                    <Logo image={'../../../public/brandsHome/brandsLogo2.png'} />
                                    <Logo image={'../../../public/brandsHome/brandsLogo3.png'} />
                                </Stack>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '2rem', justifyContent: 'center', alignItems: 'center' }} >
                                    <Logo image={'../../../public/brandsHome/brandsLogo4.png'} />
                                    <Logo image={'../../../public/brandsHome/brandsLogo5.png'} />
                                    <Logo image={'../../../public/brandsHome/brandsLogo6.png'} />
                                </Stack>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '2rem', justifyContent: 'center', alignItems: 'center' }} >
                                    <Logo image={'../../../public/brandsHome/brandsLogo7.png'} />
                                    <Logo image={'../../../public/brandsHome/brandsLogo8.png'} />
                                    <Logo image={'../../../public/brandsHome/brandsLogo9.webp'} />
                                </Stack>
                            </SwiperSlide>
                        </Swiper>
                        {init && (
                            <style>
                                {`
                           .swiper-slide.swiper-slide-active{
                            min-height:15vh !important;
                        }
                         
                        .swiper-pagination *{
                            width:8px !important;
                            height:8px !important;
                            opacity:1 !important;
                        }
                        .swiper-pagination .swiper-pagination-bullet-active-next{
                            background-color: transparent !important;
                            border:2px solid white;
                            width:8px !important;
                        }         
                        .swiper-pagination .swiper-pagination-bullet-active-next-next,
                        .swiper-pagination .swiper-pagination-bullet-active-prev,
                        .swiper-pagination .swiper-pagination-bullet-active-prev-prev
                        {
                            background-color: transparent !important;
                            border:2px solid white;
                        }      
                        .swiper-pagination-bullet-active {
                            background-color:white;
                        }
                        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next,
                        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next,
                        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev,
                        .swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev
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