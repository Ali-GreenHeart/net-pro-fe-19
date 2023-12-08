import React from 'react'
import { Container, Box, Typography, Stack } from '@mui/material'
import ContactForm from '../ContactForm'

const QuestionsH = () => {
    return (
        <Box sx={{ backgroundImage: `url('public/FormHomeBg.png')`, backgroundSize: 'cover', py: 4 }}>
            <Container sx={{ textAlign: 'center' }}>
                <Stack flexDirection={'column'} flexWrap={'wrap'} justifyContent={'space-around'} spacing={2} sx={{textAlign:'center'}}>
                    <ContactForm side='center'/>
                </Stack>
            </Container>
        </Box>
    )
}

export default QuestionsH