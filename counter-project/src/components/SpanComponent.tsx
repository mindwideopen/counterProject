import React from 'react';
import styled from "styled-components";

type SpanComponentProps = {
   value: string


}

export const SpanComponent = (props: SpanComponentProps) => {

    return (
        <SpanStyled>
            {props.value}
        </SpanStyled>
    );
};


const SpanStyled = styled.span`
    margin-right: 10px;
   
    
`