import React from 'react';
import styled from "styled-components";


type ButtonPropsType = {
    buttonFunction: string
}

const Button = (props: ButtonPropsType) => {
    return (
        <ButtonStyled>
            {props.buttonFunction}
        </ButtonStyled>
    );
};

export default Button;

const ButtonStyled = styled.button`
    
    
`