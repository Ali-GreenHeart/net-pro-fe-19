import React from 'react'
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"

export const ProductSections = ({id, title, body}) => {
        return (
            <React.Fragment key={id} >
                <Stack flexWrap={'wrap'} alignItems={'center'} justifyContent={'flex-start'} spacing={3} sx={{textAlign:'center', margin:'1rem 0'}}>
                    <Typography variant="h3" component='h1' color="info.main" sx={{ fontWeight: 600, letterSpacing: 1 }}>{title}</Typography>
                    <Typography variant="body1" color="info.main" sx={{ width: '100%' }}>{body}</Typography>
                </Stack>
            </React.Fragment >
        )
    }

