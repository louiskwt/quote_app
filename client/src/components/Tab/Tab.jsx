import React from 'react'
import { Box, Fab } from '@mui/material'
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Tab = ({ iconType }) => {
    const IconList = {
        add: <AddIcon />,
        edit: <ModeEditIcon />
    }

    const Links = {
        add: '/create'
    }

    const icon = IconList[iconType];

    return (
        <Box sx={{ position: 'fixed', bottom: '1rem', right: '0.5rem' }}>
            <Link to={Links[iconType]}>
                <Fab color="primary">
                    {icon}
                </Fab>
            </Link>
        </Box>
    )
}

export default Tab