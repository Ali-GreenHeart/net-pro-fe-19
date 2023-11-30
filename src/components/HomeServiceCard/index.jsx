import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import { Card, CardContent, IconButton, Typography } from "@mui/material"
import React from 'react'


const HomeServiceCard = ({ body, title }) => {
    return (
        <Card sx={{
            borderRadius: '16px',
            borderBottom: '10px solid transparent',
            minWidth: 275,
            height: 250,
            "&:hover": {
                borderBottomColor: 'primary.main'
            }
        }}>
            <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: '100%'
            }}>
                <IconButton sx={{ bgcolor: 'secondary.light' }}>
                    <HandymanRoundedIcon color='primary' />
                </IconButton>
                <Typography variant='h6' fontWeight={700}>
                    {title}
                </Typography>
                <Typography variant='body'>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default HomeServiceCard
