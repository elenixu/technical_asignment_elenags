import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import LogoFooter from '../../assets/logo/logo_white.png'
import Image from 'next/image'

function Footer() {
  
  return (
    <div>
      <Box sx={{
        backgroundColor: '#074075',
        width: '100%',
        height: 'auto',
        margin: '0',
      }}>
        <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '50px',

      }}>
        <Container sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

      }}>
        <Typography variant="footer1"> Test created by: </Typography>
        <Typography variant="footer2"> Elena Gil Salazar</Typography> 
        </Container>
        <Typography variant="footer3">20/05/2024</Typography> 
         <Image src={LogoFooter} alt='Logo footer'/></Container>
      </Box>
    </div>
  )
}

export default Footer