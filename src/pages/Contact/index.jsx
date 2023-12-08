import ContactForm from "../../components/ContactForm"
import PageContainer from "../../components/PageContainer"
import { Container, Box, Typography, Stack, Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import styles from './style.module.css'
const Contact = () => {
    return (
        <div>
            <PageContainer bannerTitle="Əlaqə">
                <Container sx={{ py: 4 }}>
                    <Grid container>
                        <Grid item sx={12} sm={5}>
                            <Stack justifyContent={'space-evenly'} spacing={3} sx={{ height:'90%'}}>
                                <Card sx={{ maxWidth: 345, padding: '15px' }}>
                                    <CardContent>
                                        <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '20px' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'primary.main' }}>
                                                <LocationOnIcon color='info' />
                                            </Box>
                                            <Box className={styles.locationText}>
                                                <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                                                    Ünvan                                            </Typography>
                                                <Typography variant="body2" color={'primary'}>
                                                    Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025                                            </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>

                                <Card sx={{ maxWidth: 345, padding: '15px' }}>

                                    <CardContent>
                                        <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '20px' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'primary.main' }}>
                                                <PhoneIcon color='info' />
                                            </Box>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                                                    Telefon
                                                </Typography>
                                                <Typography variant="body2" color={'primary'} my={1}>
                                                    +99450 5754080
                                                </Typography>
                                                <Typography variant="body2" color={'primary'}>
                                                    +99450 5754070
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Card sx={{ maxWidth: 345, padding: '15px' }}>
                                    <CardContent>
                                        <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ gap: '20px' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'primary.main' }}>
                                                <EmailIcon color='info' />
                                            </Box>
                                            <Box>
                                                <Typography gutterBottom variant="h5" component="div" color={'primary'}>
                                                    Email
                                                </Typography>
                                                <Typography variant="body2" color={'primary'}>
                                                    info@netprogroup.az                                                    </Typography>
                                            </Box>
                                        </Stack>

                                    </CardContent>
                                </Card>
                            </Stack>

                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Stack textAlign={'center'} flexWrap={'wrap'} justifyContent={'space-around'} spacing={2}>
                                <ContactForm />
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
                <iframe style={{
                    border: 0,
                    width: '100%',
                    marginTop: 30,
                    minHeight: '70vh'
                }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5964001322254!2d49.90569791173867!3d40.417790971320315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030635c979bcb1d%3A0xfa39683687982543!2sJED%20Academy%20Koroglu!5e0!3m2!1sen!2saz!4v1701328081704!5m2!1sen!2saz" aloading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </PageContainer>
        </div >
    )
}
export default Contact
