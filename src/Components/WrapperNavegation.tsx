import React from 'react'
import styled from 'styled-components'
import theme from '../Config/theme';

const BoxNavegateStyled = styled.div`
    padding: 0 40px;

    nav {
        ul {
            display: flex;
            
            li {
                padding: 10px;
                list-style: none;
                font-weight: bold;

                a {
                    text-decoration: none;
                    color: ${(props) => props.theme.color};
            }
        }
    }

    small{
    padding-left: 10px;
    color: ${(props) => props.theme.fontColor }
}

    svg {
    font-size: 28px;
    color: ${(props) => props.theme.color};
    margin: 0px 16px;
    }
}
`

export default BoxNavegateStyled;