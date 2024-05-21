'use client'; 

import { createTheme } from "@mui/material"; 

const fontFamily = 'Inter, sans-serif'; 
const whiteColor = '#FFF'; 
const darkGrey = '#2A282F'; 
const middleGrey = '#625F68'; 

export const theme = createTheme({
    palette: {
        background: {
            default: '#F6F3F3', 
        },
    },
    typography: {
        fontFamily: fontFamily, 
       

        // Style for the normal text of the footer.
        footer1: {
            color: whiteColor,
            textAlign: 'center',
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
        // Style for the bold text of the footer.
        footer2: {
            color: whiteColor,
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
        //Style for the footer date info.
        footer3: {
            color: whiteColor,
            textAlign: 'center',
            fontFamily: fontFamily,
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 'normal',
            letterSpacing: '-0.52px',
        },
        // Styles for the Title description of the goals.
        biotitle: {
            color: darkGrey,
            textAlign: 'center',
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
        // Styles for the text description of the goals.
        biotext: {
            color: middleGrey,
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
        // Styles for the text "Here are the 17 sustainable development goals:".
        introtext: {
            color: darkGrey,
            fontFamily: fontFamily,
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
    },
});


export default theme;

