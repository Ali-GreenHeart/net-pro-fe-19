import React from 'react'
import { Typography, Paper, Box, Stack, Divider } from '@mui/material/'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';

const ArticleCards = ({ id, image, body }) => {
    return (
        <>
            <Paper elevation={0} sx={{ display: 'flex' }} >
                <Box>
                    <img src={image} alt={`article ${id + 1}`} />
                </Box>
                <Box padding={'10px'}>
                    <Box sx={{ display: 'flex', flexFlow: 'row wrap', gap: 1, justifyContent: 'flex-start' }}>
                        <QueryBuilderIcon fontSize='small' color='secondary' />
                        <Typography variant="body2" color="text.secondary">
                            05.02.2022
                        </Typography>
                    </Box>
                    <Typography variant="body1" color="primary">{body}</Typography>
                </Box>
            </Paper>
            {id !== 2 ? <Divider></Divider> : null}
        </>

    )
}

export default ArticleCards