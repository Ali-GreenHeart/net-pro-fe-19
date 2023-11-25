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

export default function ProducsSwiper() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [realIndex, setRealIndex] = useState(1)
    const [init, setInit] = useState(false)
    return (
        <>
            <Stack
                gap={2}
                flexDirection="row"
                sx={{
                    position: 'absolute',
                    zIndex: 100,
                    bottom: 20,
                    right: 40
                }}>
                <Button variant="contained" ref={prevRef}>
                    <ArrowLeft />
                </Button>
                <Button variant="contained" ref={nextRef}>
                    <ArrowRight />
                </Button>
            </Stack>
            <Swiper
                onRealIndexChange={({ realIndex }) => {
                    setRealIndex(realIndex + 1)

                }}
                loop
                onInit={() => setInit(true)}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{
                    backgroundImage: `url("https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "70vh",
                    width: '100%'
                }}>slide1</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=11e949fc5d06576bc8b80ec192896753")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 3</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 4</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 5</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 6</SwiperSlide>

            </Swiper>
            {init && (
                <style>
                    {`
                                 .mySwiper .swiper-slide:not(.swiper-slide-active) {
                                      
                                            border: 2px solid blue;
                                            transform:scale(0.7);
                                            filter: grayscale(100%);                                        }
                
                                        .mySwiper .swiper-slide-active {
                                            border: 2px solid red;
                                            transform:scale(1)
                                        }
                
                    `}
                </style>
            )}
        </>
    );
}
