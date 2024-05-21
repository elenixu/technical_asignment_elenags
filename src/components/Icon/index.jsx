'use client';

import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { listIcons } from '@/assets/pngs/listIcons';
import defaultIcon from '../../assets/pngs/sdg1-white.png';
import {getColor} from '@sdgindex/data/sdgs'

function Icon(goal) {


  const [icon, setIcon] = useState(defaultIcon);
  const [bgColor, setBgColor] = useState("#E5243B")
  
  // Function to set the icons list, function to find the background color
  useEffect(() => {
       setIcon(listIcons.filter((icon) => icon.code === goal.code)[0].icon);
    
       if(goal.code != undefined && goal.code != null){
        setBgColor(getColor(parseInt(goal.code)))
       }

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
        backgroundColor: bgColor,
      }}
    >
     <Image src={icon} alt={`Icon ${goal.code}`} width="128" height="128" />
    </Container>
  );
}

export default Icon;
