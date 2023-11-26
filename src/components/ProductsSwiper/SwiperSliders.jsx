import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { products } from './db';

const SwiperSliders = () => {
    return (
        products.map(({ id, img }) => {
            return (
                <SwiperSlide style={{
                    backgroundImage: `url("${img}")`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    height: "60vh",
                    width: '100%'
                }}>slide{id}</SwiperSlide>
            )
        })
    )
}

export default SwiperSliders