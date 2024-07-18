import React from 'react';
import styled from "styled-components";



type SpanComponentProps = {

    value: string,
    maxValue?: number,
    displayWarning?: boolean

}



export const SpanComponent = (props:SpanComponentProps) => {

    return (
        <SpanStyled >
            {props.value}
        </SpanStyled>

    );
};


const SpanStyled = styled.span<SpanComponentProps>`
font-weight: 900;
    color:rgba(102, 210, 241)
`