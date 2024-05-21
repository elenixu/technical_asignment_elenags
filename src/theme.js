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
        fontSize: 16,
        
        footer1: {
            color: whiteColor,
            textAlign: 'center',
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
        footer2: {
            color: whiteColor,
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
        footer3: {
            color: whiteColor,
            textAlign: 'center',
            fontFamily: fontFamily,
            fontSize: '13px',
            fontWeight: 300,
            lineHeight: 'normal',
            letterSpacing: '-0.52px',
        },
        biotitle: {
            color: darkGrey,
            textAlign: 'center',
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
        biotext: {
            color: middleGrey,
            fontFamily: fontFamily,
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: 'normal',
            letterSpacing: '-0.64px',
        },
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

