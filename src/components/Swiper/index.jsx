import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';

export default function SwiperComponent() {
    const [realIndex, setRealIndex] = useState(1)
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <Box sx={{
            position: 'relative'
        }}>
            <Stack
                gap={2}
                flexDirection="row"
                sx={{
                    position: 'absolute',
                    zIndex: 100,
                    bottom: 20,
                    left: 40
                }}>
                <h1> {realIndex} /  5 </h1>
            </Stack>
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
                pagination={{
                    type: "bullets",
                    dynamicBullets: true,
                    renderBullet: function (index, className) {
                        return '<span style="background-color:#435072;width: 15px; height:15px;" class="' + className + '">' + (index + 1) + '</span>';
                    }
                }}

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    height: "70vh",
                    width: '100%'
                }}>
                    <Typography variant="h4">Avadanlıqların Quraşdırılması və Konfiqurasiyası</Typography>
                </SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 2</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 3</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 4</SwiperSlide>
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    height: "70vh",
                    width: '100%'
                }}>Slide 5</SwiperSlide>
            </Swiper>
        </Box>
    );
}
