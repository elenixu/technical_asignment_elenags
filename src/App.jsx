import React from 'react'
import Home from "./pages/Home"
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from '@mui/material'


export const App = () => {
    return(
        <body>
            <Container sx={{bgcolor: "background.default"}} >
                <Header/>
                <Home/>
                <Footer/>
            </Container>
          
        </body>
    )
}