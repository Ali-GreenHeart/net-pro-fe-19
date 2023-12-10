import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import { Typography, Grid, Box, Stack, Divider, CardActionArea, Link } from '@mui/material';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import services from '../../mockData/services';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function BlogCards() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        services.map(({ id, title, body }) => {
            return (
                <Grid item key={id} xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345, m: 2 }}>
                        <CardActionArea>
                            <Link href={`/gallery-blog/blog/${title}`} underline="none">
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/GallerySection/image3.png"
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Stack flexDirection={'row'} justifyContent={'space-between'}>
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
                                    <Stack>
                                        <Typography variant="h5" color="primary" gutterBottom sx={{ minHeight: '95px' }}>
                                            {title}
                                        </Typography>
                                        <Typography variant="body1" color="primary">
                                            {body}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Link>
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        })

    )
}