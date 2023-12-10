import React from 'react'
import { useParams } from 'react-router'
import PageContainer from '../../components/PageContainer';
import services from '../../mockData/services';
import { Typography, Container, Grid, Box, Stack, Divider, Paper } from '@mui/material'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { articles } from './articles';
import ArticleCards from './ArticleCards';

const BlogSingle = () => {
    const { slug } = useParams()
    console.log(slug, services);
    const item = services.find(({ title }) => slug === title)
    console.log(item);

    return (
        <PageContainer bannerTitle='Qalereya və Bloq'>
            <Container>
                <Grid container sx={{ py: 3 }} spacing={2}>
                    <Grid item xs={12} sm={6} lg={7}>
                        <Box>
                            <img src="/BlogSingleSource/Main.png" alt="blog main page" />
                        </Box>
                        <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{ paddingRight: '15px', mt:1 }} >
                            <Box sx={{ display: 'flex', flexFlow: 'row wrap', gap: 1, justifyContent: 'flex-start' }}>
                                <QueryBuilderIcon fontSize='small' color='secondary' />
                                <Typography variant="body2" color="text.secondary">
                                    05.02.2022
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', flexFlow: 'row wrap', gap: 1, justifyContent: 'flex-start' }}>
                                <VisibilityOutlinedIcon fontSize='small' color='secondary' />
                                <Typography variant="body2" color="text.secondary">
                                    Baxış sayı: 20
                                </Typography>
                            </Box>
                        </Stack>
                        <Divider variant='fullWidth' sx={{ my: 2 }}></Divider>
                        <Box>
                            <Typography variant="h4" color="primary" gutterBottom>{item.title}</Typography>
                            <Typography variant="body2" color="primary" paragraph>{item.body}</Typography>
                            <Typography variant="body2" color="primary" paragraph>{item.body}</Typography>
                            <Typography variant="body2" color="primary" paragraph>{item.body}</Typography>
                            <Typography variant="body2" color="primary" paragraph>{item.body}</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={6} lg={5}>
                        <Stack spacing={5}>
                            <Box>
                                <Typography variant="h5" color="primary" sx={{ mb: 2 }}>Son məqalələr</Typography>
                                <Stack spacing={2}>
                                    {articles.map(({ id, image, body }) => {
                                        return <ArticleCards id={id} image={image} body={body} />
                                    })}
                                </Stack>
                            </Box>
                            <Box>
                                <Typography variant="h5" color="primary" sx={{ mb: 2 }}>Populyar məqalələr</Typography>
                                <Stack spacing={2}>
                                    {articles.map(({ id, image, body }) => {
                                        return <ArticleCards id={id} image={image} body={body} />
                                    })}
                                </Stack>
                            </Box>

                        </Stack>

                    </Grid>
                </Grid>
            </Container >
        </PageContainer >
    )
}

export default BlogSingle