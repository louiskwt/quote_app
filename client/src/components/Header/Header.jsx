import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreateIcon from '@mui/icons-material/Create';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

import './Header.css';

const Header = () => {
    // Drawer state
    const [drawerState, setDrawerState] = useState(false);

    // toggle drawer function
    const toggleDrawer = (open) => (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setDrawerState(open);
    }


    let drawer = <>
                <IconButton id="drawer" onClick={toggleDrawer(true)}>
                    <MenuIcon fontSize='large' />
                </IconButton>
                <Drawer
                    anchor={'left'}
                    open={drawerState}
                    onClose={toggleDrawer(false)}
                >
                     <Box
                        sx={{ width: 250, padding: 2 }}
                        role='presentation'
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                <Link to='/' className='header__link'>
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InsertDriveFileIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Quotes' />
                                    </ListItem>
                                </Link>
                                <Link to='/create' className='header__link'>
                                    <ListItem button >
                                        <ListItemIcon>
                                            <CreateIcon />
                                        </ListItemIcon>
                                        <ListItemText primary='Create Quotes' />
                                    </ListItem>
                                </Link>
                            </List>
                        </Box>
                    </Drawer>
                </>

    return (
        <div className='header'>
            {drawer}
        </div>
    )
}

export default Header