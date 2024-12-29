'use client'

import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Create custom styled CircularProgress
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: '#9747FF', 
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}));

// Create track CircularProgress
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TrackCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: '#44256b', 
  position: 'absolute',
  opacity:30,
  left: 0,
  '& .MuiCircularProgress-circle': {
    strokeLinecap: 'round',
  },
}));

const RewardsProgress = ({ value = 75 }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        width: 150,
        height: 150,
      }}
    >
      {/* Background track progress */}
      <TrackCircularProgress
        variant="determinate"
        value={100}
        size={150}
        thickness={4.5}
        
      />
      {/* Main progress */}
      <StyledCircularProgress
        variant="determinate"
        value={value}
        size={150}
        thickness={5}
        
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body1"
          component="div"
          sx={{ color: 'white', fontWeight: 500, fontSize:14 }}
        >
          Rewards
        </Typography>
      </Box>
    </Box>
  );
};

export default RewardsProgress;