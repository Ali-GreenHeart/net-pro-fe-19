import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FormHelperText from '@mui/material/FormHelperText';
import Navigation from "../../components/Navigation"
import HomePhoto from '../../components/homephoto';
import Container from '@mui/material/Container';




export default function Home1stPart() {


    const [age, setAge] = React.useState('');

    const handleChange = (e) => {
        setAge(e.target.value);
    };
    return (
        <>
            <Box sx={{ flexGrow: 1, }} >
                <AppBar position="static">
                    <Toolbar sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <IconButton
                            size="small"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <LocationOnIcon />
                            <Typography variant="body1" component="p" sx={{ fontSize: '15px' }} >
                                Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025          </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            color="inherit"
                        >
                            < WhatsAppIcon />
                            <Typography variant="body1" component="p">
                                +99450 5754080 +99450 5754070
                            </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            color="inherit"
                        >
                            < MailIcon />
                            <Typography variant="body1" component="p">
                                info@netprogroup.az
                            </Typography>
                        </IconButton>
                        <Box component={'div'}>
                            < FacebookIcon sx={{ border: '1px solid white', borderRadius: 2 }} />
                            < LinkedInIcon sx={{ border: '1px solid white', borderRadius: 2 }} />
                            < InstagramIcon sx={{ border: '1px solid white', borderRadius: 2 }} />
                            < WhatsAppIcon sx={{ border: '1px solid white', borderRadius: 2 }} />
                        </Box>
                        <div>

                            <FormControl sx={{ m: 1, minWidth: 120, border: '1px solid white', borderRadius: '4px' }}>

                                <Select

                                    sx={{ color: 'white', borderColor: 'white' }}
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>1 USD - 1.700 AZN ⏺️</em>
                                    </MenuItem>
                                    <MenuItem value={10}>10 USD - 17.00 AZN</MenuItem>
                                    <MenuItem value={20}>50 USD - </MenuItem>
                                    <MenuItem value={30}>100 USD -</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>

                                <Select

                                    sx={{ color: 'white' }}
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>AZ</em>
                                    </MenuItem>
                                    <MenuItem value={10}>RUS</MenuItem>
                                    <MenuItem value={20}>ENG </MenuItem>
                                    <MenuItem value={30}>UK</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{ bgcolor:'#F4F4F4' }}>
                <Container >
                    <Navigation />
                </Container>
            </Box>
            <Box sx={{
                backgroundImage: 'url("../../../public/Home.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Container>
                    <HomePhoto />
                </Container>
            </Box>
        </>
    );
}
