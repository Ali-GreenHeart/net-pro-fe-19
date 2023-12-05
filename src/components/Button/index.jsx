import React from 'react'
import {Button} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ButtonNetPro = ({color, title, iconColor, baseColor }) => {
    return (
        <Button variant="contained" color={baseColor} type='submit' sx={{ color: color, textTransform: 'capitalize', padding: '0.5rem 2rem' }}>
          {title}     <ArrowForwardIcon sx={{ marginLeft: '1.5rem', color: iconColor }} />  </Button>)
}

export default ButtonNetPro