import React from 'react';
import styled from "styled-components";

type SpanComponentProps = {
    fieldName: string;
}

export const SpanComponent = (props: SpanComponentProps) => {
    return (
        <SpanStyled>
            {props.fieldName}
        </SpanStyled>
    );
};

export default SpanComponent;

const SpanStyled = styled.span`
    margin-right: 10px;
    
`