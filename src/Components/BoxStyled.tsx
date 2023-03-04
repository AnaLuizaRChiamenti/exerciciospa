import React from 'react';
import styled from 'styled-components';

interface BoxStyledProps {
    widthSize?: string;
    heightSize?: string;
    rowReverse?: 'row-reverse' | 'row';
}

const BoxStyled = styled.div<BoxStyledProps>`
    display: flex;
    width: ${(props) => props.widthSize ?? '100%'};
    height: ${(props) => props.heightSize ?? '40vh'};
    flex-direction: ${(props) => props.rowReverse ?? 'row'};
    align-items: center;
    justify-content: space-evenly;

    figure {
        width: 50%;
        height: 100%;

        img {
            height: 100%;
            width: 100%;
        }
    }

        
`

export default BoxStyled;