import React from 'react';
import styled from "styled-components";



type SpanComponentProps = {

    value: string,
    displayWarning?: boolean

}



export const SpanComponent = (props:SpanComponentProps) => {
    console.log('warning ' + props.displayWarning)

    return (
        <SpanStyled value={props.value} displayWarning={props.displayWarning} >
            {props.value}
        </SpanStyled>

    );
};


const SpanStyled = styled.span<SpanComponentProps>`
    text-align: center;
    vertical-align: middle;
    line-height: ${props => props.displayWarning ? '85px' : 'auto'};
    font-weight: 900;
    color: rgba(102, 210, 241);
    background-color: ${props => props.displayWarning ? 'red' : ''};
    width: ${props => props.displayWarning ? '100%' : 'auto'};
    height: ${props => props.displayWarning ? '100%' : 'auto'};
    position: ${props => props.displayWarning ? 'absolute' : 'static'};
`