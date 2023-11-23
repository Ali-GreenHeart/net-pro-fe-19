import { Box, Typography } from '@mui/material'
import React from 'react'

const NetProIcon = () => {
    return (
        <Box
            sx={{
                mr: 1,
                display: 'inline-block',
                width: 85,
                height: 65,
                bgcolor: 'secondary.main',
                position: 'relative',
                transform: 'scale(1.2)',
                top: 10,
                zIndex: 1,
                "&::after": {
                    content: '""',
                    width: 75,
                    height: 75,
                    left: 18,
                    top: -13,
                    backgroundColor: '#F4F4F4',
                    position: 'absolute',
                    transform: 'rotate(45deg)',
                    zIndex: 0,
                },

            }}
        >
            <Box sx={{ position: 'absolute', left: 25, top:-7 }}>
                <Typography color="initial" sx={{ position: 'relative', zIndex: 5, fontSize: 32, fontWeight: 600, color: 'primary.main' }}>NETPRO</Typography>
            <Typography variant="body1" color="initial" sx={{ position: 'relative', zIndex: 5,bottom:10, fontWeight: 600, color: 'primary.light' }}>GROUP</Typography>
        </Box>
        </Box >
    )
}

export default NetProIcon