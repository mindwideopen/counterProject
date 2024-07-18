import React from 'react';
import styled from "styled-components";


type ButtonPropsType = {
    children?: React.ReactNode;     //---------------------------??????????-------------------------------
    buttonFunction: string,
    callback: () => void,
    buttonMode?: boolean,

}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (

        <ButtonStyled onClick={onClickHandler} disabled={props.buttonMode}>
            {props.buttonFunction}
        </ButtonStyled>

    );
};



const ButtonStyled = styled.button`
    background-color: rgba(24, 233, 255);
    outline: none;
    border: none;
    border-radius: 5px;
    &:hover:enabled {
        scale: 1.1;
    }

    &:active:enabled {
        scale: 1.4;

        background-color: rgba(24, 233, 255);
        
    }
    &:disabled {
        background-color: rgba(24, 233, 255, 0.3)
        
}
    &:focus {
        outline: black;
    }


`