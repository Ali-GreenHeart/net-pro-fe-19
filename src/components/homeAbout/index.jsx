import React from 'react'
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material"
import NetProIcon from '../netProIcon'
import ButtonNetPro from '../Button';
const HomeAbout = () => {
    return (
        <Box sx={{ backgroundImage:"url('/AboutHomeBg.png')"}}>
            <Container sx={{ p:{md:3, xs:4}  }}>
                <Stack flexDirection={'column'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} sx={{textAlign:'center', minHeight: '80vh', gap:'2.5rem'}}>
                    <img src="/netProIcons/NetProIcon4.svg" alt="Net Pro Icon Logo" style={{fontSize:"4rem"}}/>
                    <Typography variant="h4" color="info.main" sx={{fontWeight: 600}}>“NetPro Group” şirkəti haqqında</Typography>
                    <Typography variant="body1" color="info.main" sx={{ lineHeight: '1.8rem' }}>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin
                        in felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio el
                        ementum. Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risu
                        s tortor, sollicitudin. Ultrices sed ac lobortis at. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Eget ullamcorper ipsum mattis sed. Auctor proin in
                        felis, nulla porta. Elementum, pharetra, egestas non vulputate eget odio element
                        um. Mauris felis nisi, consequat non diam egestas ac in diam. Arcu et risus tortor,
                        sollicitudin. Ultrices sed ac lobortis at. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Iure, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit
                        . Incidunt sint aut eveniet consectetur hic porro unde molestias, ut, veritatis vel la
                        udantium nesciunt tempore perferendis inventore repudiandae sapiente vero pariatur eaq
                        ue assumenda, nulla aliquam autem debitis vitae voluptatum! Delectus, quisquam est!
                    </Typography>
                    <ButtonNetPro baseColor='info' color='primary.main' title='Ətraflı' iconColor={'primary.main'}></ButtonNetPro>


                </Stack>
            </Container>
        </Box>
    )
}

export default HomeAbout