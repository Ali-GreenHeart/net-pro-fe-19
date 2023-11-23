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
import Link from '@mui/material/Link';
import styles from './index.module.css'
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react'
import NavItem from './NavItem';

const sections = [
    {
        to: "/",
        route: 'Əsas səhifə'
    },
    {
        to: "/about",
        route: 'Haqqımızda'
    },
    {
        route: 'Məhsullar',
        subRoutes: [
            {
                to: "/products",
                route: 'Məhsullar',
            },
            {
                to: "/products1",
                route: '2Məhsullar',
            },
            {
                to: "/products2",
                route: '3Məhsullar',
            },
        ]
    },
    {
        route: 'Xidmətlər və Həllər',
        subRoutes: [
            {
                to: "/services",
                route: 'Xidmətlər və Həllər',
            },
            {
                to: "/services2",
                route: '2Xidmətlər və Həllər',
            },
            {
                to: "/services3",
                route: '3Xidmətlər və Həllər',
            },
        ]
    },
    {
        to: "/contact",
        route: 'Əlaqə'
    },
]
export default function Navigation() {

    return (
        <Box className={styles.navContainer} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <Box sx={{ my: 2 }}>
                LOGO
            </Box>
            <MenuList className={styles.dropdown}>
                <Stack flexDirection={'row'} flexWrap={'wrap'}>
                    {
                        sections.map(({ route, subRoutes, to }, index) => {
                            return (
                                <NavItem
                                    to={to}
                                    key={index}
                                    styles={styles}
                                    section={route}
                                    subRoutes={subRoutes}
                                />
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
