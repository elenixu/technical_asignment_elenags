
"use client"


import {React,  useEffect}  from 'react'
import { Container } from '@mui/material'
import Icon from '../Icon'
import Info from '../Info'
import Countries from '../Countries'


function Card({goal, country1, country2, country3, country4, country5}) {

  //const { country1, goal } = props;

  //const [country1, setCountry1] = useState(country1)

  // useEffect(() => {
  //  console.log("country1 in Card")
  //   console.dir(country1)

  //   ,[country1]
  // })

  
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