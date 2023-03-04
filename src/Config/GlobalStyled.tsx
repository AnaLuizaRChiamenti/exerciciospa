import React from 'react'
import { createGlobalStyle } from 'styled-components'


const  GlobalStyled = createGlobalStyle`
    *, html{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        width: 100vw;
        overflow-x: hidden;
        background: ${(props) => props.theme.backgroundColor};
        color: ${(props) => props.theme.fontColor};
    }

    #root {
        width: 100%;
    }
`
export default GlobalStyled;