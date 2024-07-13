import React from 'react';
import styled from "styled-components";
import SpanComponent from "./SpanComponent";




type InputComponentType = {
    fieldName: string
}

const InputComponent = (props: InputComponentType) => {
    return (
        <div>
            <SpanComponent fieldName={props.fieldName}/>
            <InputStyled></InputStyled>
        </div>
    );
};

export default InputComponent;


const InputStyled = styled.input`
    max-width: 150px;
    outline: none;
    text-align: center;
    
    
    
`

