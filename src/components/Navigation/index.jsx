import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import NavItem from './NavItem';
import styles from './index.module.css'
import NetProIcon from '../netProIcon';

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
        <Box className={styles.navContainer} sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', padding: '2rem 0' }}>
            <NetProIcon afterBgColor={'info.main'} top={'10px'} bgColor={'secondary.main'} word1Color={'primary.main'} word2Color={'primary.light'} />
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
