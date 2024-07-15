import React from 'react';
import styled from "styled-components";

type SpanComponentProps = {
    fieldName?: string;
    displayValue?: number;
}

export const SpanComponent = (props: SpanComponentProps) => {

    return (
        <SpanStyled>
            {props.fieldName? props.fieldName: props.displayValue}
        </SpanStyled>
    );
};


const SpanStyled = styled.span`
    margin-right: 10px;
   
    
`