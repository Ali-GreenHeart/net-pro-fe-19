import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { useState } from 'react';
import NavItem from './NavItem';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import DropdownItem from './DropdownItem';
import styles from './index.module.css'
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
    {   to:'/gallery-blog',
        route: 'Qaleriya ve Blog',
       
    },
    {
        to: "/contact",
        route: 'Əlaqə'
    },
]
export default function Navigation() {
    const [toggle, setToggle] = useState(false)
    function toggleBtn() {
        setToggle(!toggle)
        console.log(toggle);
    }

    return (
        <Box className={styles.navContainer} >
            <Box>
                <img src="/netProIcons/netProIcon2.png" alt="Net Pro Icon" />
            </Box>
            {/* for 1020 down */}



            {/* for 1020px up */}
            <MenuList className={styles.dropdown} >
                <Stack flexDirection={'row'} flexWrap={'wrap'} sx={{ position: 'relative', zIndex: 100 }}>
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
            <ButtonGroup variant="text" aria-label="outlined primary button group">
                <IconButton size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <IconButton className={styles.dropBtn} aria-label="menu" size="large" color='primary' sx={{ display: 'none', position: 'relative' }} onClick={toggleBtn}>
                    <MenuIcon fontSize="inherit" />
                    {toggle ? <Paper className={styles.menu} sx={{ width: 320, position: 'absolute', right: 50, top: 20, zIndex: 200 }}>
                        <MenuList>
                            {sections.map(({ route, subRoutes, to }, index) => {
                                return (
                                    <DropdownItem
                                        to={to}
                                        key={index}
                                        section={route}
                                        subRoutes={subRoutes}
                                    />
                                )
                            })}
                        </MenuList>
                    </Paper> : null}
                </IconButton>

            </ButtonGroup>
        </Box>

    )
}
