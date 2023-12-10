import React from 'react'
import PageContainer from '../../components/PageContainer'
import {Typography, Container, Stack} from '@mui/material'
import Gallery from '../../components/Gallery'
import BlogListing from '../../components/BlogListing'

const GalleryBlog = () => {
    return (
        <PageContainer bannerTitle='Qalereya və Bloq'>
            <Container>
                <Stack>
                    <Gallery/>
                    <BlogListing/>
                </Stack>
            </Container>
        </PageContainer>

    )
}

export default GalleryBlog