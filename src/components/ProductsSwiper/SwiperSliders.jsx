import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { products } from './db';
import { Box } from '@mui/material';
import { ProductSections } from './productSection.jsx'
import styles from './style.module.css'
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
                    }}
                    className={styles.homePhoto}
                    src={img} alt="" />

            </Box>
            <Box sx={{}}>
                <ProductSections id={id} title={title} body={body} />
            </Box>
        </SwiperSlide>
    )
})

export default SwiperSliders
