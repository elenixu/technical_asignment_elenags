import React from 'react'
import LogoHeader from '../../assets/logo/SDSN-logo 1.webp'
import Image from 'next/image'
import { Container } from '@mui/material'

function Header() {
  
  return (
    <div>
      <Container sx={{
        display: 'flex',
        paddingTop: '20px',
        paddingBottom: '70px',
      }}><Image src={LogoHeader} alt='Logo header'/></Container>
    </div>
  )
}

export default Header