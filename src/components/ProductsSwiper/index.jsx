import React, { useRef, useState } from 'react';
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

import styles from './style.module.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { products } from './db';
import { ProductSections } from './productSection';
export const productImages = products.map((product)=>product.img)
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
                <Swiper style={{position: 'relative', margin:'1.5rem 0' }}
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
                        <Button variant="contained" color='info' ref={prevRef} className={styles.btn} sx={{ position: 'absolute', top: '30%', left: 1, zIndex: 200,}} >
                            <ArrowLeft sx={{color:'primary.main'}}/>
                        </Button>
                        <Button variant="contained" color='info' className={styles.btn} ref={nextRef} sx={{ position: 'absolute', top: '30%', right: 1, zIndex: 200 }}>
                            <ArrowRight sx={{color:'primary.main'}}/>
                        </Button>
                    </Stack>
                    <SwiperSlide style={{
                        backgroundImage: `url("${productImages[0]}")`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        height: "60vh",
                        width: '100%'
                    }}>slide1</SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url("${productImages[1]}")`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        height: "60vh",
                        width: '100%'
                    }}>Slide 2</SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url("${productImages[2]}")`,
                        backgroundSize: `contain`,
                        backgroundPosition: `center`,
                        height: "60vh",
                        width: '100%'
                    }}>Slide 3</SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url("${productImages[3]}")`,
                        backgroundSize: `contain`,
                        backgroundPosition: `center`,
                        height: "60vh",
                        width: '100%'
                    }}></SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url("${productImages[4]}")`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        height: "60vh",
                        width: '100%'
                    }}>Slide 5</SwiperSlide>
                    <SwiperSlide style={{
                        backgroundImage: `url("${productImages[5]}")`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`,
                        height: "60vh",
                        width: '100%'
                    }}>Slide 6</SwiperSlide>
                </Swiper>
               <ProductSections/>
                {init && (
                    <style>
                        {`
                                 .mySwiper .swiper-slide:not(.swiper-slide-active) {
                                     
                                     transform:scale(0.7);
                                     filter: opacity(60%);
                                     // transition:all 800ms;                                     }
                                     
                                     .mySwiper .swiper-slide-active {
                                         transform:scale(1);
                                         // transition:all 800ms;                                        }
                                         
                                        }
                                        
                                        `}
                    </style>
                )}
            </Container>
        </Box>
    );
}
