import { Menu, MenuItem, Typography } from "@mui/material"
import { useState } from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavItem = ({ styles, section, subRoutes = [], to }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <MenuItem
                component="a"
                href={to}
                sx={{ position: "relative" }} onClick={handleClick} >
                <Typography variant="body1" color="initial" className={styles.dropbtn}>
                    <ArrowRightIcon sx={{ position: 'relative', top: 5 }} /> {section}
                    {
                        subRoutes.length ? <KeyboardArrowDownIcon sx={{ position: 'relative', top: '5px' }} /> : null
                    }
                </Typography>
            </MenuItem>
            {
                subRoutes.length
                    ?
                    <Menu
                        sx={{
                            ".MuiPaper-root": {
                                width: 'fit-content !important'
                            }
                        }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        {
                            subRoutes.map(({ route, to }, index) => {
                                return (
                                    <MenuItem component="a" href={to} key={index}>{route}</MenuItem>
                                )
                            })
                        }
                    </Menu>
                    :
                    null
            }
        </>
    )
}
export default NavItem
