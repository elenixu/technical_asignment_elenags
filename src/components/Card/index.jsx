
import { Container } from '@mui/material'
import React from 'react'
import Icon from '../Icon'
import Info from '../Info'
import Countries from '../Countries'




function Card(goal) {
  
  return (
    <div>
    <Container sx={{
        width: '877px',
        height: '653px',
        flexShrink: 0,
        borderRadius: '29.379px',
        background: '#FFF',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '43px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Icon></Icon>
        <Info goal={goal}></Info>
        <Countries></Countries>
      </Container>
    </div>
  )
}

export default Card