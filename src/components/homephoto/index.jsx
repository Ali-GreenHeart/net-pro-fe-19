import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Margin } from '@mui/icons-material';

const HomePhoto = () => {
    return (
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
            <Box style={{marginTop:'2rem'}}>
                <Stack spacing={2}>
                    <Pagination count={3} color="primary" />
                </Stack>
            </Box>
        </Box >
    )
}

export default HomePhoto
