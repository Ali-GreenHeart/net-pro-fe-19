import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from './db';
import { Box } from '@mui/material';

const SwiperSliders = products.map(({ id, img, body, title }) => {
    return (
        <SwiperSlide
            key={id}
        >
            <Box >
                <img
                    style={{
                        height: "300px",
                        width: '100%',
                        objectFit: 'cover'
                    }}
                    src={img} alt="" />
                <h5>{title}</h5>
                <p>{body}</p>
            </Box>
        </SwiperSlide>
    )
})

export default SwiperSliders
