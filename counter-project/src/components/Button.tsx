import React from 'react';
import styled from "styled-components";


type ButtonPropsType = {
    buttonFunction: string,
    callback: () => void,
}

const Button = (props: ButtonPropsType) => {
    const callbackSet = () => {
        props.callback();
    }
    return (
        <ButtonStyled onClick={callbackSet}>
            {props.buttonFunction}
        </ButtonStyled>
    );
};

export default Button;

const ButtonStyled = styled.button`
    
    
`