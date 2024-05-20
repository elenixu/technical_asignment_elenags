'use client';

import { Container } from '@mui/material';
import React from 'react';
import Icon1 from '../../assets/pngs/sdg1-white.png'
import Image from 'next/image';

function Icon() {
  
  return (
    <Container
      sx={{
        width: '180px',
        height: '180px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: '50px',
        backgroundColor: '#78D67C',
      }}
    >
     <Image src={Icon1} alt='Icon 1' width="128px" height="128px" />
    </Container>
  );
}

export default Icon;
