import React from 'react'
import { Container, Box, Typography, Stack } from '@mui/material'
import ContactForm from '../ContactForm'

const QuestionsH = () => {
    return (
        <Box sx={{ backgroundImage: `url('public/FormHomeBg.png')`, backgroundSize: 'cover', py:4 }}>
            <Container sx={{ textAlign: 'center' }}>
                <Stack flexDirection={'column'} flexWrap={'wrap'} justifyContent={'space-around'} spacing={2} >
                    <Typography variant="h4" color="initial" component={'h2'} sx={{ fontWeight: 600, color: 'primary.main' }}>Suallarınız var?</Typography>
                    <Typography variant="body1" color="primary.main" sx={{}}>Formu doldurun. Yaxın zamanda sizinlə əlaqə saxlayacayıq.</Typography>
                    <ContactForm />
                </Stack>
            </Container>
        </Box>
    )
}

export default QuestionsH