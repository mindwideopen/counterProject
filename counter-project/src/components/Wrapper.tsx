import React from 'react';
import styled from "styled-components";

type WrapperProps = {
    direction?: string,
    justify?: string,
    align?: string,
    alignContent?: string,
    width?: string
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-direction: ${props => props.direction};
    align-content: ${props => props.alignContent};
    width: ${props => props.width};
    border: 1px solid black;
    padding: 10px;
    margin-top: 10px;
   
`
