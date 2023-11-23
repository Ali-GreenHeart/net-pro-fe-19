import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Stack from '@mui/material/Stack';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from '@mui/material/Link';
import styles from './index.module.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState, useEffect } from 'react'

const sections = [  'Əsas səhifə',  'Haqqımızda', 'Məhsullar', 'Xidmətlər və Həllər','Əlaqə']
export default function Navigation() {
    const [isDrop, setIsDrop] = useState(false)
    const toggleDropdown = (id) => {
        sections.map((section) => {
            if (id === 2) {
                setIsDrop(!isDrop)
            }
        })
        dropdown(id)

    }

    return (
        <Box className={styles.navContainer} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Box sx={{ my: 2 }}>
                LOGO
            </Box>
            <MenuList className={styles.dropdown}>
                <Stack flexDirection={'row'} flexWrap={'wrap'}>
                    {
                        sections.map((section, index) => {
                            return (
                                <MenuItem sx={{ position: "relative" }} key={index} onClick={() => toggleDropdown(index)} >
                                    <Typography variant="body1" color="initial" className={styles.dropbtn}>
                                        <ArrowRightIcon sx={{ position: 'relative', top: 5 }} /> {section}
                                        {isDrop ? <KeyboardArrowDownIcon sx={{ position: 'relative', top: '5px' }} /> : ('')}
                                    </Typography>
                                </MenuItem>
                            )
                        })
                    }
                </Stack>
            </MenuList>
            <IconButton size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}>
                <SearchIcon />
            </IconButton>
        </Box>
    )
}
