import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


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
                    bottom: 35,
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
                <SwiperSlide style={{
                    backgroundImage: `url("/Home.png")`,
                    backgroundSize: `cover`,
                    width: '100%'
                }}>
                    <Box sx={{ height: '80vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start', gap: 3 }}>
                        <Typography variant="h3" color="primary.main" component={'h1'} width={'60%'} fontWeight={'600'}>
                            Avadanlıqların Quraşdırılması
                            və Konfiqurasiyası
                        </Typography>
                        <Box sx={{ bgcolor: 'white', borderRadius: '12px', padding: '2px' }} >
                            <Button variant={'contained'} sx={{ bgcolor: '#FFFFFF', color: 'primary.main', borderRadius: '10px', fontWeight: '600', border: '1px solid #435072' }}>
                                Daha Ətraflı
                                <KeyboardDoubleArrowRightIcon />
                            </Button>
                        </Box>
                    </Box >                </SwiperSlide>
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
