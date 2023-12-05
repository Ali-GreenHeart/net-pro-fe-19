import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Mousewheel, Navigation } from 'swiper/modules';
import { Button, Stack, Typography, Container } from '@mui/material';
import GallerySlides from './GallerySlides';

export default function Gallery() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [init, setInit] = useState(false)

    const breakpoints = {
        520: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1135: {
            slidesPerView: 4,
        },
    };

    return (
        <Container sx={{ py: 3 }}>
            <Stack flexDirection={'row'} justifyContent={'space-between'} flexWrap={'wrap'} spacing={1} sx={{ my: 2 }}>
                <Typography variant="h4" color="primary.main" sx={{ fontWeight: 600 }}>Qalereya</Typography>
                <Stack flexDirection={'row'} justifyContent={'flex-end'} flexWrap={'wrap'} sx={{ gap: '10px' }} >
                    <Button variant="outlined" ref={prevRef} sx={{ boxShadow: 'none', minWidth: '30px', padding: 1 }}>
                        <WestIcon />
                    </Button>
                    <Button variant="outlined" ref={nextRef} sx={{ boxShadow: 'none', minWidth: '30px', padding: 1 }}>
                        <EastIcon />
                    </Button>
                </Stack>
            </Stack>
            <Swiper
                loop
                onInit={() => setInit(true)}
                breakpoints={breakpoints}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                mousewheel={true}
                className="mySwiper"
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Pagination, Mousewheel, Navigation]}
                style={{ marginBlock: '2rem' }}
            >

                {GallerySlides}

            </Swiper>
        </Container>
    );
}
