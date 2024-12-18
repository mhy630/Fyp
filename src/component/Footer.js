import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        py: 3,
        textAlign: 'center',
        backgroundColor: '#212121',
        color: '#fff', // Ensure body text is white
      }}
    >
      <Typography variant="body2" sx={{ color: '#fff' }}>
        © {new Date().getFullYear()} PitchVision. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ color: '#fff' }}>
        Follow us on{' '}
        <Link href="#" color="inherit" underline="always" sx={{ color: '#fff' }}>
          Twitter
        </Link>{' '}
        |{' '}
        <Link href="#" color="inherit" underline="always" sx={{ color: '#fff' }}>
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
}
