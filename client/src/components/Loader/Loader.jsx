import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

const Loader = () => {
  return (
    <Box component='div' sx={{ p: 2, display: 'flex', justifyContent: 'center' }} >
        <CircularProgress />
    </Box>
  )
}

export default Loader