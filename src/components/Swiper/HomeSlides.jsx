import { home1stsections } from './db.js'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Button, Stack, Typography, Container } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import styles from './styles.module.css'

export const HomeSlides = home1stsections.map(({ id, image, title }) => {
    return <SwiperSlide style={{
        backgroundImage: `url("/${image}")`,
        backgroundSize: `cover`,
        width: '100%',
    }} key={id}>
        <Container>
            <Box className={styles.myBox} sx={{ minHeight: '80vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'flex-start', gap: 3 }}>
                <Typography className={styles.header} variant="h3" color="primary.main" component={'h1'} width={{ xs: '100%', md: '60%' }} fontWeight={'600'} sx={{ textTransform: 'capitalize', fontSize:{xs:'2rem', sm:'3rem'} }}>
                    {title}
                </Typography>
                <Box sx={{ bgcolor: 'white', borderRadius: '12px', padding:{xs:0,sm:'2px'}, transform:{xs:'scale(0.9)', sm:'scale(1.0)'} }} >
                    <Button className={styles.btn} variant={'contained'} sx={{ bgcolor: '#FFFFFF', color: 'primary.main', borderRadius: '10px', fontWeight: '600', border: '1px solid #435072'}}>
                        Daha Ətraflı
                        <KeyboardDoubleArrowRightIcon />
                    </Button>
                </Box>
            </Box >
        </Container>
    </SwiperSlide >

})




