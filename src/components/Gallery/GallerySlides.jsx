import React from 'react'
import { SwiperSlide } from 'swiper/react';
import { gallery } from './db';

const imageStyle = { width: '100%', height: '100%', objectFit: 'cover', borderRadius:'10px', boxShadow:'0 2px 10px rgba(0, 0, 0, 0.3)' }

const GallerySlides = gallery.map(({ id, image }) => {
    return (
        <SwiperSlide key={id} style={{padding:'10px 0'}}>
            <img src={image} alt="galleryImage" style={imageStyle} />
        </SwiperSlide>

    )
})


export default GallerySlides