import React from 'react'
import { products } from './db'
import { productImages } from '.'
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"

export const ProductSections = () => {
    return (
        products.filter(({ img, id }) => productImages.indexOf(img) === id).map(({ id, title, body, img }) => {
            return (
                <React.Fragment key={id} >
                    <Stack flexWrap={'wrap'} alignItems={'center'} justifyContent={'flex-start'} spacing={3} >
                        <Typography variant="h3" component='h1' color="info.main" sx={{ fontWeight: 600, letterSpacing: 1 }}>{title}</Typography>
                        <Typography variant="body1" color="info.main" sx={{ width: { xs: '100%', md: '70%' }, textAlign: 'center' }}>{body}</Typography>
                    </Stack>
                </React.Fragment >
            )
        })
    )
}

