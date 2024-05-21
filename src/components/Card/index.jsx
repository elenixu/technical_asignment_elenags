
"use client"


import {React,  useEffect}  from 'react'
import { Container } from '@mui/material'
import Icon from '../Icon'
import Info from '../Info'
import Countries from '../Countries'


function Card({goal, country1, country2, country3, country4, country5}) {

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
        gap: '20px',
        padding: '20px',
        marginTop: '35px',
        marginBottom: '35px',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Icon code={goal.code}></Icon>
        <Info goal={goal}></Info>
        
         {(country1 != null && country1 != undefined) && 

        //country1.name
         <Countries country1={country1} country2={country2} country3={country3} country4={country4} country5={country5}
        /> } 
        
     

      </Container>
    </div>
  )
}

export default Card