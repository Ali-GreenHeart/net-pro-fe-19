import React from 'react'
import { Typography, Grid } from '@mui/material'
import BlogCards from './BlogCards'

const BlogListing = () => {
    return (
        <>
            <Typography variant="h4" color="primary" sx={{ m: 2 }}>Bloq</Typography>
            <Grid container>
                <BlogCards />
            </Grid>
        </>
    )
}

export default BlogListing