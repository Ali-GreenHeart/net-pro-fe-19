import React from 'react'
import { Button } from "@mui/material"

const Logo = ({image}) => {
  return (
    <Button variant="contained" color="info" sx={{ height: "60px", width: "200px" }}>
      <img src={image} alt={'logo'} style={{maxWidth:'100%', height:'90%'}}/>
    </Button>)
}

export default Logo