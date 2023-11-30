import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Container, Grid, Stack, Typography, alpha } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '../Link';

const links = [
    { title: "Əsas səhifə", to: '/' },
    { title: "Haqqımızda", to: '/about' },
    { title: "Məhsullar", to: '/products' },
    { title: "Xidmətlər və Həllər", to: '/services' },
    { title: "Qalereya və Bloq", to: '/blog' },
    { title: "Əlaqə", to: '/elaqe' }
]
const Footer = () => {
    return (
        <Box bgcolor="primary.main">
            <Container sx={{ color: 'white' }}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={3}>
                        <Stack alignItems="center">
                            <Box maxWidth={130}>
                                <img style={{ width: '100%' }} src="/logo.png" alt="" />
                            </Box>
                            <Stack gap={0.7} flexDirection="row" sx={{ mx: 1 }}>
                                <FacebookIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                                <LinkedInIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                                <InstagramIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                                <WhatsAppIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography mb={2} variant='h5'>Saytın xəritəsi</Typography>
                        <Stack
                            sx={{
                                "& a": {
                                    my: 0.4,
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: 'absolute',
                                        width: 0,
                                        height: 0,
                                        border: "8px solid",
                                        borderColor: "transparent transparent transparent " + alpha("#fff", 0.5),
                                        left: -13,
                                        top: 1.3
                                    }
                                }
                            }}>
                            {
                                links.map(({ title, to }) => {
                                    return (
                                        <Link to={to} title={title} />
                                    )
                                })
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        1
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        1
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Footer
