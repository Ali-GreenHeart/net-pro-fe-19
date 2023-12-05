import React from 'react'
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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Navigation from "../../components/Navigation"
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';




export function Header() {


    const [money, setMoney] = React.useState('');
    const [country, setCountry] = React.useState('');

    const handleChange = (e) => {
        setMoney(e.target.value);
    };
    const handleChange2 = (e) => {
        setCountry(e.target.value);
    };
    return (
    
            <Box sx={{ flexGrow: 1, textAlign: 'center', position: 'sticky', top: 0, zIndex: 1000 }} >
                <AppBar position="static"
                    sx={{
                        ".MuiToolbar-root": {
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                        }
                    }}
                >
                    <Toolbar sx={{ flexDirection: { xs: 'column', md: 'row' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '1rem 0', gap: 1 }}>
                        <Box>
                            <Typography variant="body1" component="p" sx={{ display: 'flex', justifyContent: 'flex-start', marginRight: 1 }}>
                                <LocationOnIcon />
                                Fəzail Bayramov küç., 1156, Xətai ray., Bakı, Azərbaycan, AZ1025</Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" component="p" sx={{ display: 'flex', justifyContent: 'flex-start', marginRight: 1 }}>
                                < WhatsAppIcon />
                                +99450 5754080 +99450 5754070
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body1" component="p" sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                < MailIcon />
                                info@netprogroup.az
                            </Typography>
                        </Box>
                        <Stack gap={0.7} flexDirection="row" sx={{ mx: 1 }}>
                            <FacebookIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                            <LinkedInIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                            <InstagramIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                            <WhatsAppIcon sx={{ border: '1px solid white', borderRadius: 0.5, boxSizing: 'content-box', padding: 0.3 }} />
                        </Stack>
                        <FormControl sx={{
                            minWidth: 120, "& fieldset": {
                                border: '1px solid white !important',
                                outline: "none",
                            },
                        }}>
                            <Select
                                sx={{
                                    ".MuiSelect-select": {
                                        py: "10px !important",
                                    },
                                    "& svg": {
                                        color: "white"
                                    },
                                    color: 'white',
                                    border: 'none',
                                    outline: 'none',
                                    margin: '0 0.5rem'

                                }}

                                value={money}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                IconComponent={() => <ArrowDownward color="white" style={{ cursor: 'pointer', position: 'relative', right: 5 }} />}
                            >
                                <MenuItem value=""> 1 USD - 1.700 AZN ⏺️</MenuItem>
                                <MenuItem value={10}>lorem</MenuItem>
                                <MenuItem value={20}>lorem</MenuItem>
                                <MenuItem value={30}>lorem</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{
                            "& fieldset": {
                                border: 'none !important',
                                outline: "none",
                            },
                            minWidth: 120,
                        }}>
                            <Select
                                sx={{
                                    ".MuiSelect-select": {
                                        py: "10px !important"
                                    },
                                    "& svg": {
                                        color: "white"
                                    },
                                    color: 'white',
                                    border: 'none',
                                    outline: 'none',


                                }}
                                IconComponent={() => <ArrowDropDownIcon color="white" style={{ cursor: 'pointer' }} />}
                                value={country}
                                onChange={handleChange2}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">AZ</MenuItem>
                                <MenuItem value={10}>RUS</MenuItem>
                                <MenuItem value={20}>ENG </MenuItem>
                                <MenuItem value={30}>UK</MenuItem>
                            </Select>
                        </FormControl>
                    </Toolbar>
                </AppBar>
                <Box sx={{ bgcolor: '#F4F4F4' }}>
                    <Container >
                        <Navigation />
                    </Container>
                </Box>
            </Box>
    );
}
