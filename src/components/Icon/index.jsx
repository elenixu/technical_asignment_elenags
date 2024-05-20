'use client';

import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { listIcons } from '@/assets/pngs/listIcons';
import defaultIcon from '../../assets/pngs/sdg1-white.png';

function Icon(goal) {


  const [icon, setIcon] = useState(defaultIcon);

  useEffect(() => {
       setIcon(listIcons.filter((icon) => icon.code === goal.code)[0].icon);
  }, []); 

  
  
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
     <Image src={icon} alt={`Icon ${goal.code}`} width="128" height="128" />
    </Container>
  );
}

export default Icon;
