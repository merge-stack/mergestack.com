import * as React from 'react';
import { Typography, Box } from '@mui/material';

export default function Copyright() {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        paddingBlock: '0.25rem',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%'
      }}
    >
      <Typography variant="body2" sx={{ color: '#343E5F' }} align="center">
        {'Copyright © '}
        {new Date().getFullYear()}, All Rights Reserved by Mergestack
      </Typography>
    </Box>
  );
}
