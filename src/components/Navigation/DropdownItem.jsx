import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuList from '@mui/material/MenuList';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const DropdownItem = ({ section, subRoutes = [], to }) => {
    const [dropdown, setDropdown] = useState(false)

    function handleToggle() {
        setDropdown(true)
    }

    return (
        <>
            <MenuItem component='a' href={to} onMouseOver={handleToggle}>
                <ListItemIcon>
                    <NavigateNextIcon fontSize="small" sx={{color:'primary.main'}}/>
                </ListItemIcon>
                <ListItemText>{section}</ListItemText>

                <ListItemIcon>
                    {
                        subRoutes.length ?
                            <KeyboardArrowDownIcon fontSize="small" sx={{color:'primary.main'}}/> : null
                    }

                </ListItemIcon>
            </MenuItem>
            {
                subRoutes.length ?
                    <MenuList>
                        {dropdown ? subRoutes.map(({ route, to }, index) => {
                            return (
                                <MenuItem component='a' href={to} key={index}>
                                    <ListItemIcon>
                                        <Link fontSize="small" sx={{color:'primary.main'}} />
                                    </ListItemIcon>
                                    <ListItemText>{route}</ListItemText>
                                </MenuItem>
                            )
                        }) : null}
                    </MenuList>
                    : null
            }
        </>
    )
}

export default DropdownItem