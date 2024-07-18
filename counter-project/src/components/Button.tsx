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
    background-color: red;
    outline: none;
    border: none;
    border-radius: 5px;

    &:hover:enabled {
        scale: 1.3;
    }

    &:active:enabled {

        background-color: green;
        color: white
    }
    &:disabled {
        background-color: rgba(255, 0, 0, 0.3)
        
}


`