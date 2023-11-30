import React from 'react'
import {Button} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ButtonNetPro = ({color, title, iconColor }) => {
    return (
        <Button variant="contained" color="info" sx={{ color: color, textTransform: 'capitalize', padding: '0.5rem 2rem' }}>
          {title}     <ArrowForwardIcon sx={{ marginLeft: '1.5rem', color: iconColor }} />  </Button>)
}

export default ButtonNetPro