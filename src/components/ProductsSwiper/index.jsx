import React, { useRef, useState } from 'react';
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './style.module.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { products } from './db';
import { ProductSections } from './productSection';
import SwiperSliders from './SwiperSliders';

export const productImages = products.map((product) => product.img)
export default function ProducsSwiper() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [realIndex, setRealIndex] = useState(1)
    const [init, setInit] = useState(false)
    const breakpoints = {
        600: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 3,
        },
    };

    return (
        <Box sx={{ bgcolor: 'primary.main', minHeight: '90vh', padding: '1rem 0' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" component='h1' color="initial" sx={{ textAlign: 'center', fontWeight: 600, color: 'info.main' }}>Məhsullar</Typography>
                <Swiper style={{ position: 'relative', margin: '1.5rem 0' }}
                    onRealIndexChange={({ realIndex }) => {
                        setRealIndex(realIndex + 1)

                    }}
                    loop
                    onInit={() => setInit(true)}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    breakpoints={breakpoints}
                    spaceBetween={30}
                    centeredSlides={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <Stack flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
                        <Button color='info' ref={prevRef} className={styles.btn} sx={{ position: 'absolute', top: '30%', left: 1, zIndex: 200, }} >
                            <ArrowBackIcon sx={{ color: 'white' }} />
                        </Button>
                        <Button color='info' className={styles.btn} ref={nextRef} sx={{ position: 'absolute', top: '30%', right: 1, zIndex: 200 }}>
                            <ArrowForwardIcon sx={{ color: 'white' }} />
                        </Button>
                    </Stack>
                    {SwiperSliders}
                </Swiper>
                <ProductSections />
                {init && (
                    <style>
                        {`
                        .swiper-wrapper{
                            align-items: center;
                        }
                                 .mySwiper .swiper-slide:not(.swiper-slide-active) {
                                     
                                     transform:scale(0.7);
                                     filter: opacity(60%);
                                     // transition:all 800ms;                                     }
                                     
                                     .mySwiper .swiper-slide-active {
                                         transform:scale(1);
                                         // transition:all 800ms;                                        }
                                         
                                        .mySwiper .swiper-slide:not(.swiper-slide-active) h5,
                                        .mySwiper .swiper-slide:not(.swiper-slide-active) p                                        
                                        {
                                            display:none;
                                        }
                                        
                                        `}
                    </style>
                )}
            </Container>
        </Box>
    );
}
