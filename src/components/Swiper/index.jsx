import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, Button, Stack, Container } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
import { HomeSlides } from './HomeSlides.jsx'

export default function SwiperComponent() {
    const [realIndex, setRealIndex] = useState(1)
    const [init, setInit] = useState(false)
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <Box sx={{
            position: 'relative',
        }}>
                <Stack
                    gap={2}
                    flexDirection="row"
                    sx={{
                        position: 'absolute',
                        zIndex: 100,
                        bottom: 60,
                        left: 40,
                        color: 'primary.main',
                    }}>
                    <h1> {realIndex} /  5 </h1>
                </Stack>
                <Stack
                    gap={2}
                    flexDirection="row"
                    sx={{
                        position: 'absolute',
                        zIndex: 100,
                        bottom: 35,
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
                    },
                    clickable: true
                }}

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {HomeSlides}
            </Swiper>
        </Box>
    );
}
