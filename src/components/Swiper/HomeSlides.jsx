import { home1stsections } from './db.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Stack, Typography, Container } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export const HomeSlides = home1stsections.map(({ id, image, title }) => {
    return <SwiperSlide style={{
        backgroundImage: `url("/${image}")`,
        backgroundSize: `cover`,
        width: '100%'
    }} key={id}>
        <Container>
            <Box sx={{ minHeight: '80vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start', gap: 3 }}>
                <Typography variant="h3" color="primary.main" component={'h1'} width={'60%'} fontWeight={'600'} sx={{ textTransform: 'capitalize' }}>
                    {title}
                </Typography>
                <Box sx={{ bgcolor: 'white', borderRadius: '12px', padding: '2px' }} >
                    <Button variant={'contained'} sx={{ bgcolor: '#FFFFFF', color: 'primary.main', borderRadius: '10px', fontWeight: '600', border: '1px solid #435072' }}>
                        Daha Ətraflı
                        <KeyboardDoubleArrowRightIcon />
                    </Button>
                </Box>
            </Box >
        </Container>
    </SwiperSlide>

})




